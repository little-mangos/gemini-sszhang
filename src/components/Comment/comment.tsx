import React, { useRef, useState} from 'react'
import classNames from 'classnames'
import Button,{ButtonType} from '../Button/button'
import  "./_style.scss";




interface BaseCommentProps {
    placeholder?:string;
    icon?:string;
    btnText?:string;
    onSubmit?:(value:any)=>void | undefined;
    className?:string;

}

const Comment:React.FC<BaseCommentProps>=(props)=>{
    const {placeholder,icon, btnText,className,onSubmit}=props;
    const inputElement=useRef<HTMLInputElement>(null)
    const [isFocus,setIsFocus]=useState<boolean>(false);
    const handleFocus = ()=>{
        setIsFocus(true)
    }
    const handleBlur = ()=>{
        setIsFocus(false)
    }

    const handleClick =()=>{
        if(inputElement.current){
            onSubmit && onSubmit(inputElement.current.value)
        }
    }

    const classes=classNames('whzhang_comment_container',className,{
        [`container_border_blur`]:isFocus===false,
        [`container_border_focus`]:isFocus===true,

    })
        return (
            <div className={classes}>
                <div className={"whzhang_comment_logo"}>{icon}</div>
                <div className={"whzhang_comment_input"}><input ref={inputElement} onFocus={handleFocus} onBlur={handleBlur}  placeholder={placeholder}/></div>
                <div className={"whzhang_comment_button"}>
                    <Button btnType={isFocus?ButtonType.Primary:ButtonType.Default} onClick={handleClick}>{btnText}</Button>
                </div>
            </div>
        )



}

Comment.defaultProps={
    placeholder:"Add a comment",
    icon:"o",
    btnText:"default_post",
}


export default Comment













