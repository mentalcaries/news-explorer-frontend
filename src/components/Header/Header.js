import React from 'react';
import { useLocation } from 'react-router';
import Navigation from '../Navigation/Navigation';
import './Header.css';

function Header({onLogin, loggedIn }) {

  const { pathname } = useLocation();
  
  //conditional NavBar
  return (
    <header className="header">
      <div className="header__content">
          <h2 className={`header__logo ${pathname==='/articles'? 'header__logo_light' :''}`}>NewsExplorer</h2>
        <Navigation onLogin={onLogin} loggedIn={loggedIn}/>
      </div>
    </header>
  );
}

export default Header;
