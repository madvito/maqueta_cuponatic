import React,{useState} from 'react';
import {Redirect} from 'react-router-dom';
import ArrowLeft from '../components/icons/ArrowLeft';
import X from '../components/icons/x.png';
import OptionButton from '../components/OptionButton';

const Order = () => {
    const buttonList = [
        ['Menor precio', 'options-button'],
        ['Mayor precio', 'options-button'],
        ['Lo más nuevo', 'options-button'],
        ['Distancia', 'options-button']
    ]
    const [buttons, setButtons] = useState(buttonList);
    const [close, setClose] = useState(false);

    const handleX = () =>{
        setClose(true)
    }
    if(close){
        return <Redirect to='/'/>
    }
    
    return (
        <div className='mobile-format bg-white'>
            <header className='search-options-header'>
                <div className="search-options-header-title">
                <ArrowLeft/><h2>Ordenar por</h2>
                </div>
                <img className='search-options-close-button' src={X} alt="" onClick={()=>handleX()}/>
                
            </header>
            <section className='order-options'>
                {
                    buttons.map((button, index)=><OptionButton key={index} title={button[0]} buttonStyle={button[1]} index={index} setButtons={setButtons}/>)
                }
            </section>
        </div>
    )
}

export default Order
