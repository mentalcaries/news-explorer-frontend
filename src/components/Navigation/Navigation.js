import React from 'react';
import './Navigation.css';
import { useLocation } from 'react-router';
import { NavLink } from 'react-router-dom';

function Navigation({ onLogin, loggedIn }) {

  const { pathname } = useLocation();
  return (
    <nav className="nav ">
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
        <button onClick={onLogin} className={`nav__button ${pathname==='/articles'? 'nav__button_light' :''}`}>User Signout</button>
      )}
    </nav>
  );
}
export default Navigation;
