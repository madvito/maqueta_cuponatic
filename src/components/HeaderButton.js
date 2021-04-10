import React from 'react'

const HeaderButton = ({Icon, text}) => {
    return (
        <div className="header-button">
                <Icon/>
                <p>{text}</p>
            </div>
    )
}

export default HeaderButton
