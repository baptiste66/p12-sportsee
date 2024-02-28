import Logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';

export default function Header(props) {
    return (
        <div className='header'>
            <div className='header__logo'>
                <Link to={`/user/${props.props}`}>
                    <div className='header__logo__img'>
                        <img
                            src={Logo}
                            alt="Logo"
                        />
                    </div>
                </Link>
                <p className='header__logo__name'>SportSee</p>

            </div>
            <ul className='header__nav'>
                <li className='header__nav__item'>Accueil</li>
                <li className='header__nav__item'>Profil</li>
                <li className='header__nav__item'>Réglages</li>
                <li className='header__nav__item'>Communauté</li>
            </ul>
        </div>

    )
}