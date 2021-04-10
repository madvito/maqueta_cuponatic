import React from 'react'
import Star from './icons/Star'

const Card = ({cardData}) => {
    const {offerTitle, discountPrice, originalPrice, discount, location, rating} = cardData;
    return (
        <div className="card">
            <div className="card-image">

            </div>
            <div className="card-content">
                {/* <h2 className='title'>¡2x1! 10 S. Levantamiento de Glúteos y Reafirmante Abdomen</h2> */}
                <h2 className='title'>{offerTitle}</h2>
                <div className="pricetag">
                    {/* <div className="discount">
                        43%
                    </div> */}
                    <div className="discount">
                        {discount}
                    </div>
                    <div className="pricearea">
                        {/* <p className="price">
                            $5.990
                        </p> */}
                        <p className="price">
                            {discountPrice}
                        </p>
                        {/* <p className="price-before">
                            $5.990
                        </p> */}
                        <p className="price-before">
                            {originalPrice}
                        </p>
                    </div>
                </div>
                
            </div>
            <footer className='card-footer'>
                {/* <p className="location">
                    1.8km, Providencia
                </p> */}
                <p className="location">
                    {location}
                </p>
                {/* <p className="rating">
                   <Star/> 4.3 (81)
                </p> */}
                <p className="rating">
                   <Star/> {rating}
                </p>
            </footer>
        </div>
    )
}

export default Card
