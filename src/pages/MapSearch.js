import React from 'react';
import Links from '../components/Links';
import Header from '../components/Header';
import mocap_map from '../mocap/mocap-map.png'

const MapSearch = () => {
    return (
        <div className='mobile-format bg-grey'>
            <Header />
            <Links />
            <img className='map' src={mocap_map} alt="Map Mocap"/>
        </div>
    )
}

export default MapSearch
