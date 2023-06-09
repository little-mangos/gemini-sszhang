import React,{useContext,useState} from 'react'
import classNames from 'classnames'
import {MenuContext} from './menu'
import {IMenuItemProps} from './menuItem'

export interface ISubMenuProps {
    index?:string,
    title:string,
    className?:string,
    style?:React.CSSProperties,
}

const SubMenu:React.FC<ISubMenuProps>=(props)=>{
    const {children,className,style,index,title}=props;
    const context=useContext(MenuContext);
    const openedSubMenus=context.defaultOpenSubMenus as Array<string>;
    const isOpen=(index && context.mode==='vertical')?openedSubMenus.includes(index):false;
    const [menuOpen,setOpen]=useState(isOpen)

    const classes=classNames('menu-item submenu-item',className,{
        'is-active':index===context.index
    });
    const handleClick=(e:React.MouseEvent)=>{
        e.preventDefault();
        setOpen(!menuOpen)
    }
    let timer:any;
    const handleMouse=(e:React.MouseEvent,toggle:boolean)=>{
        clearTimeout(timer)
        e.preventDefault();
        timer=setTimeout(()=>{
            setOpen(toggle)
        },300)
    }

    const clickEvents=context.mode==='vertical'?{
        onClick:handleClick
    }:{};
    const hoverEvents=context.mode!=='vertical'?{
        onMouseEnter:(e:React.MouseEvent)=>{handleMouse(e,true)},
        onMouseLeave:(e:React.MouseEvent)=>{handleMouse(e,false)},
    }:{}

    const renderChildren=()=>{
        const subMenuClasses=classNames('viking-submenu',{
            'menu-opened':menuOpen
        })
        const childrenComponent= React.Children.map(children,(child,i)=>{
            const childrenElement = child as React.FunctionComponentElement<IMenuItemProps>
            const {displayName}=childrenElement.type;
            if(displayName==="MenuItem"){
                return React.cloneElement(childrenElement,{
                    index:`${index}-${i}`
                })
            }else{
                console.error("Menu has a child which is not a menuItem component")
            }
        })
        return <ul className={subMenuClasses}>
            {childrenComponent}
        </ul>

    }
    return (
        <li key={index} className={classes} style={style} {...hoverEvents}>
            <div className={"submenu-title"} {...clickEvents}>
                {title}
            </div>
            {
                renderChildren()
            }
        </li>
    )
}

SubMenu.displayName="SubMenu"

export default SubMenu
