import React from 'react';
import'../../styles/nutrition.css'

function NutritionItem({ figureSrc, altText, value, type }) {
    return (
        <div className='main__nutrition__item'>
            <span className={`main__nutrition__item__figure ${type}`}>
                <img src={figureSrc} alt={altText} />
            </span>
            <span className='main__nutrition__item__box'>
                <p className='main__nutrition__item__box__value'>{value}</p>
                <p className='main__nutrition__item__box__type'>{type}</p>
            </span>
        </div>
    );
}

export default NutritionItem;