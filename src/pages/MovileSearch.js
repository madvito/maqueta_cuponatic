import React, {useContext} from 'react';
import Links from '../components/Links';
import Header from '../components/Header';
import CardList from '../components/CardList';
import Filtros from '../components/icons/Filtros';
import Mapa from '../components/icons/Mapa';
import Orden from '../components/icons/Orden';
import { ModalContext } from '../context/ModalContext';

const MovileSearch = () => {
    const {orderModalOn, filterModalOn} = useContext(ModalContext);

    const links = [
        [Orden,orderModalOn, null],
        [Filtros,filterModalOn,null],
        [Mapa, null, '/map']
    ]
    return (
        <div className='mobile-format bg-grey'>
            <Header />
            <Links links={links}/>
            <CardList/>
        </div>
    )
}

export default MovileSearch
