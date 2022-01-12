import {useLocation} from 'react-router';
import Navigation from '../Navigation/Navigation';
import './Header.css';

function Header({onLogin, loggedIn, isMenuOpen, setIsMenuOpen}) {
  const {pathname} = useLocation();
  const lightHeader = pathname === '/articles';

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <header className="header">
      <div
        className={`overlay ${isMenuOpen ? 'overlay_visible' : ''}`}
        onClick={toggleMenu}
      ></div>
      <div
        className={`header__content ${
          lightHeader ? 'header__content_light' : ''
        }`}
      >
        <h2
          className={`header__logo ${lightHeader ? 'header__logo_light' : ''}`}
        >
          NewsExplorer
        </h2>
        <button
          className={`header__menu ${lightHeader ? 'header__menu_light' : ''} ${
            isMenuOpen ? 'header__menu_open' : ''
          } ${isMenuOpen && lightHeader ? 'header__menu_open_light' : ''}`}
          onClick={toggleMenu}
        />
        <Navigation
          onLogin={onLogin}
          loggedIn={loggedIn}
          isMenuOpen={isMenuOpen}
          lightHeader={lightHeader}
        />
      </div>
    </header>
  );
}

export default Header;
