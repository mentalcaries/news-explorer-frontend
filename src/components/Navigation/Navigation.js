import React from 'react';
import './Navigation.css';
import { useLocation } from 'react-router';
import { NavLink } from 'react-router-dom';
import logOut from '../../images/logout-black.svg'
import logOutLight from '../../images/logout-white.svg'

function Navigation({ onLogin, loggedIn, isMenuOpen, lightHeader }) {

  const { pathname } = useLocation();
  return (
    <nav className={`nav ${isMenuOpen? 'nav_open' : ''}`}>
      <NavLink
        exact
        to="/"
        className={`nav__link ${pathname==='/articles'? 'nav_light' :''}`}
        activeClassName={`nav__link_active ${pathname==='/articles'? 'nav__link_active_light' :''}`}
      >
        Home
      </NavLink>
      {loggedIn && (
        <NavLink
        exact
        to="/articles"
        className={`nav__link ${pathname==='/articles'? 'nav_light' :''}`}
        activeClassName={`nav__link_active ${pathname==='/articles'? 'nav__link_active_light' :''}`}
        >
          Saved Articles
        </NavLink>
      )}
      {!loggedIn ? (
        <button onClick={onLogin} className={`nav__button ${pathname==='/articles'? 'nav__button_light' :''}`}>Sign in</button>
        ) : (
          <button onClick={onLogin} className={`nav__button nav__button_user ${pathname==='/articles'? 'nav__button_light' :''}`}>Elise<img src={lightHeader? logOutLight: logOut} alt="Log out icon" className="nav__logout" /> </button>
          )}
          
    </nav>
  );
}
export default Navigation;
