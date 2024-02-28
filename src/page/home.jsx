import { Link } from 'react-router-dom';
import "../styles/home.css";
import Logo from '../assets/logo.png';

function HomePage() {
  return (
    <div className="home">
      <div className='home__logo'>
        <img
          className='home__logo__img'
          src={Logo}
          alt="Logo"
        /><h1>SportSee</h1>
      </div>

      <div className='home__user'>
        <h2 className='home__user__title'>Sélectionne un utilisateur</h2>
        <Link className='home__user__link' to={"/user/18"}>Utilisateur 18 : Cecilia</Link>
        <Link className='home__user__link' to={"/user/12"}>Utilisateur 12 : Karl</Link>
        <Link className='home__user__link' to={"/user/test"}>Utilisateur de test : Thomas</Link>
      </div>
    </div>
  );
}

export default HomePage;
