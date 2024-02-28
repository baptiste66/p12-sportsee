import React from 'react';

function NutritionItem({ figureSrc, altText, value, type }) {
    return (
        <div className='main__nutrition__item'>
            <img className='main__nutrition__item__figure' src={figureSrc} alt={altText} />
            <span className='main__nutrition__item__box'>
                <p className='main__nutrition__item__box__value'>{value}</p>
                <p className='main__nutrition__item__box__type'>{type}</p>
            </span>
        </div>
    );
}

export default NutritionItem;