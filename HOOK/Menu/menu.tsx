import React,{createContext,useState} from "react"
import classNames from 'classnames'


// export  enum MenuMode{
//     Vertical='vertical',
//     Horizontal='horizontal'
// }

type MenuMode = 'horizontal' | 'vertical'
type SelectCallBack=(selectedIndex:number)=>void;

export interface MenuProps {
    defaultIndex?:number;
    className?:string;
    mode?:MenuMode;
    style?:React.CSSProperties;
    onSelect?:SelectCallBack;
    activeIndex?:number;
    children:React.ReactNode;

}

interface IMenuContext {
    index?:number;
    onSelect?:SelectCallBack;

}

export const MenuContext = createContext<IMenuContext>({index:0})

const Menu:React.FC<MenuProps>=(props)=>{
    const {children,mode,className,style,defaultIndex,onSelect}=props;
    const classes=classNames("viking-menu",className,{
        'menu-vertical':mode==="vertical"
    })
    const [currentActive,setActive]=useState(defaultIndex)
    const handleClick=(index:number)=>{
        setActive(index)
        if(onSelect){
            onSelect(index)
        }
    }

    const passedContext:IMenuContext={
        index:currentActive?currentActive:0,
        onSelect:handleClick
    }

    console.log(currentActive)
    return <ul className={classes} style={style}>
        <MenuContext.Provider value={passedContext}>
        {children}
        </MenuContext.Provider>
    </ul>
}

Menu.defaultProps={
    defaultIndex:0,
    mode:'horizontal'
}


export default Menu;
