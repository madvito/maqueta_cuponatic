import React from 'react';
import {Link} from 'react-router-dom';
import Button from './Button';

const Links = ({links}) => {
    return (
        <nav className='button-list'>
            {
                links.map((link, index)=>{
                    const Component = link[0];
                    return <Link to={link[1]} key={index}><Button><Component /></Button></Link>
                })
            }
        </nav>
    )
}

export default Links
