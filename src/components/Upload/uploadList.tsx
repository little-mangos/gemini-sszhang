import React from 'react'
import Icon from '../Icon/icon'
import {UploadFile} from "./upload";
import Progress from '../Progress'

export interface IUploadListProps {
  fileList:  UploadFile[];
  onRemove?:(_file:UploadFile)=>void
}


const UploadList:React.FC<IUploadListProps>=(props)=>{
    const {fileList,onRemove}=props;
    console.log(fileList,'fileList')

    return (
        <ul className='viking-upload-list'>
            {
                fileList.map((item,i)=>(
                    <li className='viking-upload-list-item' key={i}>
                        <span className={`file-name file-name-${item.status}`}>
                            <Icon icon={"file-alt"} theme={"secondary"}/>
                            {item.name}
                        </span>
                        <span className="file-status">
                          {(item.status === 'uploading' || item.status === 'ready') && <Icon icon="spinner" spin theme="primary" />}
                                        {item.status === 'success' && <Icon icon="check-circle" theme="success" />}
                                        {item.status === 'error' && <Icon icon="times-circle" theme="danger" />}
                        </span>
                        <span className="file-actions" onClick={onRemove?()=>onRemove(item):()=>{}}>
                          <Icon icon="times" />
                        </span>
                        {item.percent}
                        {item.status==='uploading' && <Progress percent={item.percent || 0} />}
                    </li>
                ))
            }
        </ul>
    )
}

export default UploadList
