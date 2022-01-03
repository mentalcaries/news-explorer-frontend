import React from 'react';
import './Navigation.css';
import { NavLink } from 'react-router-dom';

function Navigation({ loggedIn }) {
  return (
    <nav className="navigation">
      <NavLink
        exact
        to="/"
        className="header__link"
        activeClassName="header__link_active"
      >
        Home
      </NavLink>
      {loggedIn && (
        <NavLink
          exact
          to="/articles"
          className="header__link"
          activeClassName="header__link_active"
        >
          Saved Articles
        </NavLink>
      )}
      {!loggedIn ? (
        <button className="header__button">Sign in</button>
      ) : (
        <button className="header__button">User Signout</button>
      )}
    </nav>
  );
}
export default Navigation;
