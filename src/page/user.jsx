import { useState } from 'react';
import Error from './error';
import '../styles/user.css'
import flame from '../assets/flame.png';
import chicken from '../assets/chicken.png';
import apple from '../assets/apple.png';
import burger from '../assets/cheeseburger.png';
import NutritionItem from '../components/nutrition/nutrition_item';
import Navbar from '../components/navbar/navbar';
import LineChart from '../components/linechart/linechart';
import Barchart from '../components/barchart/barchart';
import RadarChart from '../components/radarchart/radarchart';
import PieChart from '../components/piechart/piechart';
export default function Main(props) {
    const [dataMock, setDataMock] = useState(false);
  

    const buttonMock = () => {
        setDataMock(true);
    }

    if (props.userData !== null ) {
        if ((!props.userData.dataMock || dataMock) ) { 
            const user = props.userData.user[0];
            return (
                <div className="main">
                    <div className='main__navBar'>
                        <Navbar />
                    </div>
                    <div className='main__page'>
                        <div className='main__page__welcome'>
                            <h2 className="main__page__welcome__title">Bonjour <span className="main__page__welcome__title--name">{user.firstName}</span></h2>
                            <p className="main__page__welcome__msg">Félicitation ! Vous avez explosé vos objectif hier 👏</p>
                        </div>
                        <div className='align'>
                            <div className='main__page__charts'>
                                <Barchart activity={user.activity} />
                                <div className='align-chart'>
                                    <LineChart timesSessions={user.timesSessions} />
                                    <RadarChart performance={user.performance} />
                                    <PieChart todayScore={user.todayScore} />
                                </div>
                            </div>
                            <div className='main__info'>
                                <div className='main__info__data'>
                                    <NutritionItem  figureSrc={flame} altText="logo Calories" value={`${user.keyData.kCal.toLocaleString('en-US')}kCal`} type="Calories" />
                                    <NutritionItem figureSrc={chicken} altText="logo Protéines" value={`${user.keyData.protein}g`} type="Protéines" />
                                    <NutritionItem figureSrc={apple} altText="logo Glucides" value={`${user.keyData.carbohydrate}g`} type="Glucides" />
                                    <NutritionItem figureSrc={burger} altText="logo Lipides" value={`${user.keyData.lipid}g`} type="Lipides" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        } else {
            return (
                <div className="main">
                    <div className='main__navBar'></div>
                    <Error buttonMock={buttonMock} />
                </div>
            );
        }
    }
}