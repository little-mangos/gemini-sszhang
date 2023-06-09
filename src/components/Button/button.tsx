import React,{useContext} from 'react'
import classNames from 'classnames'


export enum ButtonSize{
    Large='lg',
    Small='sm'
}

export enum ButtonType {
    Primary='primary',
    Default='default',
    Danger='danger',
    Link='link'
}

interface BaseButtonProps {
    className?:string;
    disabled?:boolean;
    size?:ButtonSize;
    btnType?:ButtonType;
    children:React.ReactNode;
    href?:string;

}
type NativeButtonProps = BaseButtonProps & React.ButtonHTMLAttributes<HTMLElement>;
type AnchorButtonProps = BaseButtonProps & React.AnchorHTMLAttributes<HTMLElement>;
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>;

const Button:React.FC<ButtonProps>=(props)=>{
    const {btnType,disabled,size,children,className,href,...restProps}=props;
    const classes=classNames('btn',className,{
        [`btn-${btnType}`]:btnType,
        [`btn-${size}`]:size,
        'disabled':btnType===ButtonType.Link && disabled,
    })
    if(ButtonType.Link===btnType && href){
        return <a className={classes} href={href} {...restProps}>{children}</a>
    }else{
        return <button disabled={disabled} className={classes} {...restProps}>{children}</button>
    }


}

Button.defaultProps={
    disabled:false,
    btnType:ButtonType.Default,
}


export default Button













