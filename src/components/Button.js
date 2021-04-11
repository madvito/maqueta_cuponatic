import React from 'react';
// import {Link} from 'react-router-dom';



const Button = ({children, func = null}) => {
    const handleClick=() => {
        if (func){
            func();
        }else{
            return;
        }
    }
    return (
        <div onClick={()=>handleClick()} className='button'>
            {children}
        </div>
    )
}

export default Button
