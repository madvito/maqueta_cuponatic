import React from 'react'

const HeaderButton = ({Icon, text}) => {
    return (
        <div className="header-button">
                <div className="header-icon">
                    <Icon className='header-icon'/>
                </div>
                <p>{text}</p>
            </div>
    )
}

export default HeaderButton
