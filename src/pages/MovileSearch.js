import React from 'react';
import Links from '../components/Links';
import Header from '../components/Header';
import CardList from '../components/CardList';

const MovileSearch = () => {
    return (
        <div className='mobile-format bg-grey'>
            <Header />
            <Links />
            <CardList/>
        </div>
    )
}

export default MovileSearch
