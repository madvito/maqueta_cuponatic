import React from "react";


const OptionButton = ({index, title, setButtons, buttonStyle}) => {
    console.log(buttonStyle);
        
    const handleClick = () => {
        if(buttonStyle=='options-button'){
            setButtons(prevState => prevState.map((state, prevIndex)=>{
                if (index != prevIndex){
                    return [state[0],'options-button'];
                }
                return [state[0],'options-button-active'];
            }));
        }
        
    }

    return (
        <div 
            // className={`order-options-button ${ active && ' order-options-button-active'}`}
            className={buttonStyle}
            onClick={()=>handleClick()}
        >
            {title}
        </div>
    )
}

export default OptionButton
