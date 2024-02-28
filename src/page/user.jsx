import { useState } from 'react';
import Error from './error';
import flame from '../assets/flame.png';
import chicken from '../assets/chicken.png';
import apple from '../assets/apple.png';
import burger from '../assets/cheeseburger.png';
import NutritionItem from '../components/nutrition/nutrition_item';

export default function Main(props) {

    const [dataMock, setDataMock] = useState(false);

    const buttonMock = () => {
        setDataMock(true);
    }

    if (props.userData !== null) {
        if (!props.userData.dataMock || dataMock) {
            const user = props.userData.user[0];
            return (
                <div className="main">
                    <div className='main__navBar'></div>
                    <div className='main__page'>
                        <div className='main__page__welcome'>
                            <h2 className="main__page__welcome__title">Bonjour <span className="main__page__welcome__title__red">{user.firstName}</span></h2>
                            <p className="main__page__welcome__msg">Félicitation ! Vous avez explosé vos objectif hier 👏</p>
                        </div>
                        <div className='NextToMain'>
                            <div className='main__info'>
                                <NutritionItem figureSrc={flame} altText="logo Calories" value={`${user.keyData.kCal.toLocaleString('en-US')}kCal`} type="Calories" />
                                <NutritionItem figureSrc={chicken} altText="logo Protéines" value={`${user.keyData.protein}g`} type="Protéines" />
                                <NutritionItem figureSrc={apple} altText="logo Glucides" value={`${user.keyData.carbohydrate}g`} type="Glucides" />
                                <NutritionItem figureSrc={burger} altText="logo Lipides" value={`${user.keyData.lipid}g`} type="Lipides" />
                            </div>
                        </div>
                    </div>
                </div>
            )
        } else {
            return (
                <div className="main">
                    <div className='main__navBar'></div>
                    <Error buttonMock={buttonMock} />
                </div>
            )
        }
    }
}
