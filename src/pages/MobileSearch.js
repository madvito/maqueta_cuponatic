import React, {useContext} from 'react';
import Links from '../components/Links';
import Header from '../components/Header';
import CardList from '../components/CardList';
import Filtros from '../components/icons/Filtros';
import Mapa from '../components/icons/Mapa';
import Orden from '../components/icons/Orden';
import { ModalContext } from '../context/ModalContext';

const MobileSearch = () => {
    const {orderModalOn, filterModalOn} = useContext(ModalContext);

    const links = [
        [Orden,orderModalOn, null,'ms1'],
        [Filtros,filterModalOn,null,'ms2'],
        [Mapa, null, '/map','ms3']
    ]
    return (
        <div className='screen-format'>
            <Header />
            <Links links={links}/>
            <CardList/>
        </div>
    )
}

export default MobileSearch
