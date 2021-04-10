import React from 'react'
import ArrowLeft from '../components/icons/ArrowLeft'
import X from '../components/icons/x.png';



const Order = () => {
    return (
        <div className='mobile-format bg-white'>
            <header className='search-options-header'>
                <div className="search-options-header-title">
                <ArrowLeft/><h2>Ordenar por</h2>
                </div>
                <img className='search-options-close-button' src={X} alt=""/>
                
            </header>
            <section className='order-options'>
                <div className="order-options-button">
                    Menor precio
                </div>
                <div className="order-options-button">
                    Mayor precio
                </div>
                <div className="order-options-button">
                    Lo más nuevo
                </div>
                <div className="order-options-button">
                    Distancia
                </div>
            </section>
        </div>
    )
}

export default Order
