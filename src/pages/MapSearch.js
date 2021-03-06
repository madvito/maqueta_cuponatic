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

    const links = [
        [Orden,orderModalOn,null,'m1'],
        [Filtros,filterModalOn, null,'m2'],
        [Galeria, null, '/','m3']
    ]

    return (
        <div className='screen-format'>
            <Header />
            <Links links={links} linksStyle={'map-shadow'}/>
            <img className='map' src={mocap_map} alt="Map Mocap"/>
        </div>
    )
}

export default MapSearch
