import React from 'react';
import data from '../mocap/mocapData';
import Card from './Card';


const CardList = () => {
    const mocapFetchData = data;
    console.log(data);
    return (
        <div className='card-list'>
            {
                mocapFetchData.map((data,index) => <Card key={index} cardData={data}/> )
            }
            
            
        </div>
    )
}

export default CardList
