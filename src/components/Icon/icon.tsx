import React from 'react'
import classNames from 'classnames'
import { FontAwesomeIcon ,FontAwesomeIconProps} from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

export type ThemeProps = 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'light' | 'dark'

export interface IconProps extends FontAwesomeIconProps{
    theme?:ThemeProps
}

const Icon:React.FC<IconProps>=(props)=>{
    const {theme,className,...restProps}=props;
    const classes=classNames('viking-icon',className,{
        [`icon-${theme}`]:theme
    })
    return (
        <FontAwesomeIcon className={classes} {...restProps}/>
    )
}

export default Icon
