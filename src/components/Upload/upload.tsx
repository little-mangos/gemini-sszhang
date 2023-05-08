import React, {ChangeEvent, useRef,useState} from 'react'
import UploadList from './uploadList'
import Dragger from './dragger'
import Axios from "axios";

type uploadFileStatus='ready' | 'uploading' | 'success' | 'error'



export interface UploadFile {
    uid:string,
    size:number,
    name:string,
    status:uploadFileStatus,
    percent?:number,
    raw?:File,
    response?:any,
    error?:any,
}

interface IUploadProps {
    action:string,
    defaultFileList?:UploadFile[],
    onSuccess?:(data:any,file:any)=>void,
    onProgress?:(percentage:number,file:File)=>void,
    beforeUpload?:(file:File)=>boolean | Promise<File>,
    onChange?:(file:File)=>void;
    onError?:(err:any,file:File)=>void;
    onRemove?:(file:UploadFile)=>void;
    headers?:{[key:string]:any};
    name?:string;
    data?:{[key:string]:any};
    withCredentials?:boolean;
    multiple?:boolean;
    accept?:string,
    drag?:boolean
}




const Upload:React.FC<IUploadProps>=(props)=>{
    const {children,onChange,beforeUpload,
        action,defaultFileList,onProgress,
        onSuccess,onError,onRemove,
        headers,name,data,drag,
        withCredentials,multiple,accept
    }=props;
    //const [fileLi,setFileLis]=useState(false)
    const [fileList,setFileList]=useState<UploadFile[]>(defaultFileList || []);
    const fileInput=useRef<HTMLInputElement>(null)
    const handleClick=()=>{
        if(fileInput.current){
            fileInput.current.click()
        }
    }

    const handleFileChange=(e:ChangeEvent<HTMLInputElement>)=>{
        const {files}=e.target;
        if(files){
            // console.log(files[0].size)
            // console.log(files[0].name)
            // console.log(files[0].lastModified)
            // console.log(files[0].type)


        }

        if(!files){
            return false
        }
        uploadFiles(files)
        if(fileInput.current){
            fileInput.current.value=""
        }
    }

    const handleRemove=(file:UploadFile)=>{
        setFileList((prevList)=>{
            return prevList.filter((item)=>item.uid!==file.uid)
        })
        if(onRemove){
            onRemove(file)
        }


    }

    const uploadFiles=(files:FileList)=>{
        let postFiles=Array.from(files);

        postFiles.forEach((file,i)=>{
            if(!beforeUpload){
                //执行上传任务
                uploadPost(file)
            }else{
               let result = beforeUpload(file)
                if(result && result instanceof Promise){

                    //执行上传任务
                    //console.log("jixu")
                }else if(result!==false){
                    //执行上传任务
                    uploadPost(file)

                }
            }
            console.log(file)
        })


    }

    const uploadPost=(file:File)=>{
        const _File:UploadFile={
            uid:Date.now()+'upload-flie',
            status:'ready',
            size:file.size,
            name:file.name,
            percent:0,
            raw:file
        }

        //setFileList([_File,...fileList])
        setFileList(prevList=>{
            return [_File,...prevList]
        })
        const formData=new FormData()
        formData.append(name || 'file',file)
        if(data){
            Object.keys(data).forEach((key)=>{
                formData.append(key,data[key])
            })
        }
        Axios.post(action,formData,{
            headers:{'Content-Type':'multipart/form-data',...headers},
            withCredentials,
            onUploadProgress:(e)=>{
                let percentage = Math.round((e.loaded * 100) / e.total) || 0;
                if(percentage<100){
                    console.log(percentage)
                    updateFileList(_File,{percent:percentage,status:"uploading"})
                }
                if(onProgress){
                    onProgress(percentage,file)
                }
            }

        }).then(resp=>{
            updateFileList(_File,{status:'success',error:resp.data})
            if(onSuccess){
                onSuccess(resp.data,file)
            }
            if(onChange){
                onChange(file)
            }
        }).catch(err=>{
            updateFileList(_File,{status:'error',response:err})
            if(onError){
                onError(err,file)
            }
            if(onChange){
                onChange(file)
            }
        })


    }

    const updateFileList=(updateFile:UploadFile,updateObj:Partial<UploadFile>)=>{
        setFileList(prevList=>{
            return prevList.map(file=>{
                if(file.uid===updateFile.uid){
                    return {...file,...updateObj}
                }else{
                    return file
                }
            })
        })
    }

    return (
        <div className={"viking-upload-component"}>
            <div className='viking-file-input' onClick={handleClick}>
                {
                    drag?<Dragger onFile={(files)=>{uploadFiles(files)} }>
                    {children}
                    </Dragger>:children
                }
            </div>
            <input accept={accept} multiple={multiple} ref={fileInput} type="file" onChange={handleFileChange} style={{display:"none"}}/>
            <UploadList fileList={fileList} onRemove={handleRemove}/>
        </div>
    )
}

Upload.defaultProps={
    name:'file'
}

export default Upload
