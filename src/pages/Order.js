import React,{useState, useEffect, useContext} from 'react';
// import {Redirect} from 'react-router-dom';
import ArrowLeft from '../components/icons/ArrowLeft';
import X from '../components/icons/x.png';
import OptionButton from '../components/OptionButton';
import { ModalContext } from '../context/ModalContext';

const Order = () => {
    const buttonList = [
        ['Menor precio', 'options-button'],
        ['Mayor precio', 'options-button'],
        ['Lo más nuevo', 'options-button'],
        ['Distancia', 'options-button']
    ]

    const {modalsOff} = useContext(ModalContext);
    const [modalStyle, setModalStyle] = useState('mobile-format bg-white order-modal')
    const [buttons, setButtons] = useState(buttonList);
    // const [close, setClose] = useState(false);

    useEffect(()=>{
        setTimeout(()=>{
            setModalStyle(modalStyle + ' modal-right')
        },0);
    },[]);



    const handleX = () =>{
        // setClose(true)
        modalsOff();
    }
    // if(close){
    //     return <Redirect to='/'/>
    // }
    
    return (
        <div className={modalStyle}>
        {/* <div className='mobile-format bg-white order-modal'> */}
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
