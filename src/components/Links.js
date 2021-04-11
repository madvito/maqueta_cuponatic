import React from 'react';
import {Link} from 'react-router-dom';
import Button from './Button';

const Links = ({links}) => {
    return (
        <nav className='button-list'>
            {
                links.map((link, index)=>{
                    const Component = link[0];
                    const func = link[1];
                    const linkTo = link[2];
                    if(linkTo){
                        return <Link to={linkTo} key={index}><Button><Component /></Button></Link>
                    }else if(func){
                        return <Button func={func}><Component /></Button>
                    }
                    
                })
            }
        </nav>
    )
}

export default Links
