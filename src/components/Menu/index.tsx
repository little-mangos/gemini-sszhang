import { FC } from 'react'
import Menu,{MenuProps} from "./menu";
import SubMenu,{ISubMenuProps} from "./subMenu";
import MenuItem,{IMenuItemProps} from "./menuItem";

export type IMenuComponent=FC<MenuProps> & {
    Item:FC<IMenuItemProps>,
    SubMenu:FC<ISubMenuProps>
}

const TransMenu = Menu as IMenuComponent

TransMenu.Item=MenuItem;
TransMenu.SubMenu=SubMenu;

export default TransMenu
