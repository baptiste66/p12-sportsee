import Yoga from '../../assets/yoga.png';
import Swim from '../../assets/swim.png';
import Bike from '../../assets/bike.png';
import Bodybuilding from '../../assets/body.png';
import '../../styles/navbar.css'

export default function NavBar() {
    return (
        <div className="navBar">
            <div className='navBar__sport'>
                <div className="navBar__sport__cat">
                    <img
                        src={Yoga}
                        alt="Yoga"
                    />
                </div>
                <div className="navBar__sport__cat">
                    <img
                        src={Swim}
                        alt="Swim"
                    />
                </div>
                <div className="navBar__sport__cat">
                    <img
                        src={Bike}
                        alt="Bike"
                    />
                </div>
                <div className="navBar__sport__cat">
                    <img
                        src={Bodybuilding}
                        alt="Bodybuilding"
                    />
                </div>
            </div>
            <p className="navBar__copy">Copiryght, SportSee 2020</p>
        </div>
    )
}