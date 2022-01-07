import React, {useState} from 'react';
import {useLocation} from 'react-router';
import Navigation from '../Navigation/Navigation';
import './Header.css';

function Header({onLogin, loggedIn}) {
  const {pathname} = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const [darkMode, setDarkMode] = useState(pathname==='/articles')
  const lightHeader = pathname==='/articles'
  
  //conditional NavBar
  //navbar open, menu icon === X
  return (
    <header className="header">
      <div
        className={`header__content ${
          lightHeader
            ? 'header__content_light'
            : ''
        }`}
      >
        <h2
          className={`header__logo ${
           lightHeader? 'header__logo_light' : ''
          }`}
        >
          NewsExplorer
        </h2>
        <button
          className={`header__menu ${lightHeader? 'header__menu_light':''} ${isMenuOpen? 'header__menu_open':''} ${(isMenuOpen && lightHeader)?'header__menu_open_light':''}`}
          onClick={() => {
            setIsMenuOpen(!isMenuOpen);
          }}
        />
        {isMenuOpen && <Navigation onLogin={onLogin} loggedIn={loggedIn} />}
      </div>
    </header>
  );
}

export default Header;
