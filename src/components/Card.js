import React from 'react'
import Star from './icons/Star'

const Card = ({cardData}) => {
    const {offerTitle, discountPrice, originalPrice, discount, location, rating} = cardData;

    return (
        <div className="card">
            <div className="card-image">

            </div>
            <div className="card-content">
                <h2 className='title'>{offerTitle}</h2>
                <div className="pricetag">
                    <div className="discount">
                        {discount}
                    </div>
                    <div className="pricearea">
                        <p className="price">
                            {discountPrice}
                        </p>
                        <p className="price-before">
                            {originalPrice}
                        </p>
                    </div>
                </div>
                
            </div>
            <footer className='card-footer'> 
                <p className="location">
                    {location}
                </p>
                <section className="rating">
                   <Star className='star'/><p> {rating[0]} <span>{rating[1]}</span></p>
                </section>
            </footer>
        </div>
    )
}

export default Card
