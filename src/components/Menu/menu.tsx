import React,{createContext,useState} from 'react'
import classNames from 'classnames'
import {IMenuItemProps} from './menuItem'

type MenuMode="vertical" | "horizontal";
type SelectCallback=(index:string)=>void;
export interface MenuProps {
    defaultIndex?:string,
    className?:string,
    mode?:MenuMode,
    style?:React.CSSProperties,
    onSelect?:SelectCallback,
    defaultOpenSubMenus?:string[]
}


interface ImenuContext {
    index:string,
    onSelect?:SelectCallback,
    mode?:MenuMode,
    defaultOpenSubMenus?:string[]
}

export const MenuContext=createContext<ImenuContext>({index:'0'})


const StudyMenu:React.FC<MenuProps>=(props)=>{
    const {className,mode,style,children,defaultIndex,onSelect,defaultOpenSubMenus}=props;
    const [currentActive,setActive]=useState(defaultIndex)
    const classes=classNames('viking-menu',className,{
        'menu-vertical':mode==="vertical",
        'menu-horizontal':mode!=='vertical'
    });
    const handleClick=(index:string)=>{
        setActive(index)
        if(onSelect){
            onSelect(index)
        }
    }

    const passedContext:ImenuContext={
        index:currentActive?currentActive:'0',
        onSelect:handleClick,
        mode,
        defaultOpenSubMenus
    }

    const renderChildern=()=>{
        return React.Children.map(children,(child,index)=>{
            const childElement= child as React.FunctionComponentElement<IMenuItemProps>;
            const {displayName}=childElement.type;
            if(displayName==='MenuItem' || displayName==='SubMenu'){
                return  React.cloneElement(childElement,{
                    index:index.toString()
                })
            }else{
                console.error("Menu has a child which is not a menuItem component")
            }
        })
    }

    return (
        <ul className={classes} style={style}>
            <MenuContext.Provider value={passedContext}>
                {renderChildern()}
            </MenuContext.Provider>
        </ul>
    )
}

StudyMenu.defaultProps={
    defaultIndex:'0',
    mode:"horizontal",
    defaultOpenSubMenus:[]
}

export default StudyMenu

