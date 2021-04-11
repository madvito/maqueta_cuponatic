import React from 'react'

const HeaderButton = ({Icon, text}) => {
    return (
        <div className="header-button">
                {/* <Icon className='header-icon'/> */}
                <div className="header-icon">
                    <Icon className='header-icon'/>
                </div>
                <p>{text}</p>
            </div>
    )
}

export default HeaderButton
