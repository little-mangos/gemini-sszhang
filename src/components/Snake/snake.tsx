import React,{useState} from 'react'
import SnakeImg from './images/snake.jpg'
import './index.scss'
import classNames from 'classnames'
const Snake:React.FC=(props)=>{
    const {children}=props;
    const [visible,setVisible]=useState(false);
    const classes=classNames('viking-snake');
    const handleOnChange=(e)=>{
        let {value}=e.target;
        console.log(value)
            if(value==='snake'){
                setVisible(true)
            }else{
                setVisible(false)
            }
    };
    return (
        <div className={classes}>
            <div>
            {
                visible &&   <img src={SnakeImg}/>
            }
            </div>
            <div>
                {
                    children
                }
            <input onChange={handleOnChange} />
            </div>
        </div>
    )
}
export default Snake
