import React,{useState}  from 'react';
import {Redirect} from 'react-router-dom';
import ArrowDown from './icons/ArrowDown';


const FilterCategory = ({title, children}) => {
    
    const [toggle, setToggle] = useState(false);

    const handleToggle = () =>{
        setToggle(!toggle);
    }

    

    return (
        <>
        <div 
            className="filter-options-title"
            onClick={()=>handleToggle()}
        >
            <div className="">{title}</div><div className="filter-arrow-down"><ArrowDown /></div>
        </div>
        {
            toggle && children
        }
        </>
    )
}

export default FilterCategory