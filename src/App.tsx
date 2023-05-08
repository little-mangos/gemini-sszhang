import React,{createContext,useState} from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import Button, {ButtonSize, ButtonType} from './components/Button/button'
import Comment  from './components/Comment/index'
// import Menu from './components/Menu/menu'
// import MenuItem from './components/Menu/menuItem'
import Menu from './components/Menu/menu'
import SubMenu from './components/Menu/subMenu'
import MenuItem from './components/Menu/menuItem'

import Icon from './components/Icon/icon'

import Upload from './components/Upload'

import ReactHook from './components/ReactHook'
import Snake from './components/Snake/snake'


library.add(fas)


interface IthemeProps {
    [key:string]:{ color:string, background:string }
}

const themes:IthemeProps={
    'light':{color:"red12",background:"red12"},
    'blue':{color:"blue",background:"blue"}
}

export const ThemeContext=createContext(themes.light)

const checkFileSize=(file:File)=>{
    if(Math.round(file.size/1024)>50){
        alert('file too big')
        return false
    }
    return true
}
const filePromise=(file:File)=>{
    const newFile=new File([file],'new_name.jpg',{type:file.type})
    return Promise.resolve(newFile)
}

// export interface UploadFile {
//     uid:string,
//     size:number,
//     name:string,
//     status:uploadFileStatus,
//     percent?:number,
//     raw?:File,
//     response?:any,
//     error?:any,
// }



// const defaultFileList: UploadFile[] = [
//   { uid: '123', size: 1234, name: 'hello.md', status: 'uploading', percent: 30 },
//   { uid: '122', size: 1234, name: 'xyz.md', status: 'success', percent: 30 },
//   { uid: '121', size: 1234, name: 'eyiha.md', status: 'error', percent: 30 }
// ]

function App() {
    const beforeUpload=(file)=>{
        console.log("检查是否文件大小")
        console.log(file)
        return true
    }

    const [showHide,setShowHide]=useState(true)

    const handleSubmit=(value)=>{
        console.log(`用户输入的值是（ ${value}）`)
    }





  return (
    <div className="App">
        <Comment placeholder={"Add a comment"} icon={"o"} btnText={"Post"} onSubmit={handleSubmit}></Comment>
































        <div style={{height:"200px"}}></div>

        <Snake>🐍111</Snake>
        {
            showHide && <ReactHook>
                hook
            </ReactHook>
        }


        {/*<button onClick={()=>setShowHide(!showHide)}>showhide</button>*/}


        {/*
            <Upload
            action={'https://www.mocky.io/v2/5cc8019d300000980a055e76'}
            defaultFileList={[]}
            onProgress={(percentage, file)=>console.log(percentage,file)}
            onSuccess={(data,file)=>console.log(data,file,'success')}
            onChange={(file)=>console.log(file,'onChange')}
            onError={(err,file)=>console.log(err,file,'error')}
            beforeUpload={beforeUpload}
            name='fileName'
            data={{'key':'1'}}
            headers={{'X-powered-By':'vikingship'}}
            accept=".jpg"
            multiple
            drag
        >
            <Icon icon={'upload'} size={'5x'} theme={"secondary"}/>
            <br/>
            <p>drag file over to upload</p>
        </Upload>

        <Upload
            action={'https://www.mocky.io/v2/5cc8019d300000980a055e76'}
            defaultFileList={[]}
            onProgress={(percentage, file)=>console.log(percentage,file)}
            onSuccess={(data,file)=>console.log(data,file,'success')}
            onChange={(file)=>console.log(file,'onChange')}
            onError={(err,file)=>console.log(err,file,'error')}
            beforeUpload={beforeUpload}
            name='fileName'
            data={{'key':'1'}}
            headers={{'X-powered-By':'vikingship'}}
            accept=".jpg"
            multiple
            drag
        >
            <Comment btnType={ButtonType.Primary}>upload</Comment>
        </Upload>
        */}









        {/*
        <Menu defaultIndex={"0"} mode={'vertical'} defaultOpenSubMenus={['3']} onSelect={(index)=>console.log(`menu component click menuItem${index}`)}>
            <MenuItem>cool lick</MenuItem>
            <MenuItem disabled={true}>cool lick 2</MenuItem>
            <MenuItem>cool lick 3</MenuItem>
            <MenuItem>cool lick 4</MenuItem>
            <SubMenu title={"subMenu"}>
                <MenuItem>cool lick 5</MenuItem>
                <MenuItem>cool lick 6</MenuItem>
            </SubMenu>
        </Menu>


        <Icon icon='arrow-down' theme={'success'}/>
    <ThemeContext.Provider value={themes.blue}>
      <header className="App-header">
            <Comment autoFocus={true} onClick={()=>alert("hehe")}>Hello</Comment>
            <Comment disabled={true}>Disabled Comment</Comment>
            <Comment btnType={ButtonType.Primary} size={ButtonSize.Large}>Large Primary</Comment>
            <Comment btnType={ButtonType.Danger} size={ButtonSize.Small}>Small Danger</Comment>
            <Comment btnType={ButtonType.Link}>Baidu Link</Comment>
            <Comment disabled={true} btnType={ButtonType.Link}>Disabled Link</Comment>

      </header>
        <div>

        </div>


    </ThemeContext.Provider>
        */}



    </div>
  );
}

export default App;
