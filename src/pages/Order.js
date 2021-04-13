import React,{useState, useEffect, useContext} from 'react';
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
    const [modalStyle, setModalStyle] = useState('screen-format modal')
    const [buttons, setButtons] = useState(buttonList);

    useEffect(()=>{
        setTimeout(()=>{
            setModalStyle(modalStyle + ' modal-right')
        },0);
    },[]);

    const handleLeftArrow = () =>{
        setModalStyle(modalStyle + ' modal-left');
        setTimeout(() => {
            modalsOff()
        }, 501);
    }

    const handleX = () =>{
        modalsOff();
    }
    
    return (
        <div className={modalStyle}>
            <header className='search-options-header'>
                <div className="search-options-header-title">
                <div onClick={()=>handleLeftArrow()}><ArrowLeft/></div><h2>Ordenar por</h2>
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
