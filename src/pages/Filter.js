import React, {useState, useEffect,useContext} from 'react';
// import {Redirect} from 'react-router-dom';
import FilterCategory from '../components/FilterCategory'
import ArrowLeft from '../components/icons/ArrowLeft';
import X from '../components/icons/x.png';
import { ModalContext } from '../context/ModalContext';

const Filter = () => {
    // const [close, setClose] = useState(false);
    const categories = [
        ['Categorías', ['Categía 1','Categía 2','Categía 3']],
        ['Comunas', ['Comuna 1','Comuna 2','Comuna 3']],
        ['Distancia', ['Distancia 1','Distancia 2','Distancia 3']],
        ['Rango de distancia', ['Rango 1','Rango 2','Rango 3']]
    ]

    const {modalsOff} = useContext(ModalContext);
    const [modalStyle, setModalStyle] = useState('mobile-format bg-white filter-modal')

    useEffect(()=>{
        setTimeout(()=>{
            setModalStyle(modalStyle + ' modal-right')
        },0);
    },[]);

    const handleX = () =>{
        // setClose(true)
        modalsOff()
    }
    // if(close){
    //     return <Redirect to='/'/>
    // }
    return (
        <div className={modalStyle}>
        {/* <div className='mobile-format bg-white filter-modal'> */}
            <header className='search-options-header'>
                <div className="search-options-header-title">
                <ArrowLeft/><h2>Filtrar por</h2>
                </div>
                <img className='search-options-close-button' src={X} alt="" onClick={()=>handleX()}/>
                
            </header>
            <section className='filter-options'>
                {
                    categories.map((category, index)=><FilterCategory key={index} title={category[0]}>
                        {category[1].map((option, optionIndex)=><div className='child-category' key={optionIndex}>{option}</div>)}
                    </FilterCategory>)
                }
            </section>
        </div>
    )
}

export default Filter
