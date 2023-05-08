import React,{useState,useEffect} from 'react'
import {Upload} from'../export'

interface IReactHook {
    obj:{[key:string]:any},
    handle:()=>void,

}

const ReactHook=(props:any)=>{
    const {obj,handle}=props;
    const [count,setCount]=useState(0);
    const [position,setPosition]=useState({x:0,y:0});



    useEffect(()=>{
        console.log('add effect',position.x)
        const handleClick=(e:MouseEvent)=>{
            console.log('inner',position.x)
            setPosition({x:e.clientX,y:e.clientY})
        }
        document.addEventListener('click',handleClick)

        return ()=>{
            console.log('remover effect',position.x)
            document.removeEventListener('click',handleClick)
        }
    },[])

    console.log('before render',position.x)


    const handleTest=()=>{
        setTimeout(()=>{
            alert(count)
        },5000)


    }

    return (
        <div>
            <Upload action={"http:www.baidu.com"}>1111111111</Upload>

            <button onClick={()=>handleTest()}>alert</button>
            <button onClick={()=>setCount(count+1)}>button test {count}</button>
            1111
            111


            x:{position.x}
            y:{position.y}

        </div>
    )
}

export default ReactHook
