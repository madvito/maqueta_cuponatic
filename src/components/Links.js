import React from 'react';
import {Link} from 'react-router-dom';
import Button from './Button';

const Links = ({links, linksStyle=''}) => {
    let navStyle = 'button-list';
    if(linksStyle){
        navStyle += ` ${linksStyle}`;
    }
    return (
        <nav className={navStyle}>
            <div className="button-list-separation">
                {
                    links.map((link, index)=>{
                        const Component = link[0];
                        const func = link[1];
                        const linkTo = link[2];
                        if(linkTo){
                            return <label key={index}><Link to={linkTo} ><Button ><Component /></Button></Link></label>
                        }else if(func){
                            return <Button key={index} func={func}><Component /></Button>
                        }
                        return null;
                    })
                }
            </div>
        </nav>
    )
}

export default Links
