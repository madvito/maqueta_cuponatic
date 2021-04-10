import React from 'react';
import {Link} from 'react-router-dom';
import Button from './Button';
import Filtros from './icons/Filtros';
import Mapa from './icons/Mapa';
import Orden from './icons/Orden';


const Links = () => {
    return (
        <nav className='button-list'>
            
            <Button><Orden/></Button>
            <Button><Filtros/></Button>
            <Link to='/map'><Button><Mapa/></Button></Link>
        </nav>
    )
}

export default Links
