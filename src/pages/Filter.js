import React, {useState, useEffect,useContext} from 'react';
import FilterCategory from '../components/FilterCategory'
import ArrowLeft from '../components/icons/ArrowLeft';
import X from '../components/icons/x.png';
import { ModalContext } from '../context/ModalContext';

const Filter = () => {
    const categories = [
        ['Categorías', ['Categía 1','Categía 2','Categía 3']],
        ['Comunas', ['Comuna 1','Comuna 2','Comuna 3']],
        ['Distancia', ['Distancia 1','Distancia 2','Distancia 3']],
        ['Rango de distancia', ['Rango 1','Rango 2','Rango 3']]
    ]

    const {modalsOff} = useContext(ModalContext);
    const [modalStyle, setModalStyle] = useState('mobile-format bg-white modal')

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
        modalsOff()
    }

    return (
        <div className={modalStyle}>
            <header className='search-options-header'>
                <div className="search-options-header-title">
                <div onClick={()=>handleLeftArrow()}><ArrowLeft/></div><h2>Filtrar por</h2>
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
