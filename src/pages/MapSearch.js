import React from 'react';
import Links from '../components/Links';
import Header from '../components/Header';
import mocap_map from '../mocap/mocap-map.png'
import Filtros from '../components/icons/Filtros';
import Galeria from '../components/icons/Galeria';
import Orden from '../components/icons/Orden';

const MapSearch = () => {
    const links = [
        [Orden,'/order'],
        [Filtros,'/filter'],
        [Galeria,'/']
    ]
    return (
        <div className='mobile-format bg-grey'>
            <Header />
            <Links links={links}/>
            <img className='map' src={mocap_map} alt="Map Mocap"/>
        </div>
    )
}

export default MapSearch
