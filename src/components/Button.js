import React from 'react';
// import {Link} from 'react-router-dom';



const Button = ({children, url = null, func = null}) => {
    return (
        <div className='button'>
            {children}
        </div>
    )
}

export default Button
