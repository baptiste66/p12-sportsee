import { Link } from 'react-router-dom';
import "../styles/home.css"
import Logo from '../Assets/logo.png';


function Home() {
  return (

    <div className="home">
      <div className='home__logo'>
        <img className='home__logo__img'
          src={Logo}
          alt="Logo"
        />
        <h1>SportSee</h1>
      </div>
      <div className='home__user'>
        <h2 className='home__user__title'>Selectionne un utilisateurs</h2>
        <Link className='home__user__link' to={"user/18"}>User 18 Cecilia</Link>
        <Link className='home__user__link' to={"user/12"}>User 12 Karl</Link>
        <Link className='home__user__link' to={"user/test"}>User test Thomas</Link>
      </div>
    </div>

  );
}

export default Home;
