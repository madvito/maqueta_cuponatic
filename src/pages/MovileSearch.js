import React from 'react';
import Links from '../components/Links';
import Header from '../components/Header';
import CardList from '../components/CardList';
import Filtros from '../components/icons/Filtros';
import Mapa from '../components/icons/Mapa';
import Orden from '../components/icons/Orden';

const MovileSearch = () => {
    const links = [
        [Orden,'/order'],
        [Filtros,'/filter'],
        [Mapa,'/map']
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
