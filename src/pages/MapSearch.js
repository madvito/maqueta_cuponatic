import React, {useContext} from 'react';
import Links from '../components/Links';
import Header from '../components/Header';
import mocap_map from '../mocap/mocap-map.png'
import Filtros from '../components/icons/Filtros';
import Galeria from '../components/icons/Galeria';
import Orden from '../components/icons/Orden';
import { ModalContext } from '../context/ModalContext';

const MapSearch = () => {

    const { orderModalOn, filterModalOn} = useContext(ModalContext);

    // const links = [
    //     [Orden,'/order', modalsOff],
    //     [Filtros,'/filter', modalsOff],
    //     [Galeria,'/', null]
    // ]
    const links = [
        [Orden,orderModalOn,null],
        [Filtros,filterModalOn, null],
        [Galeria, null, '/']
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
