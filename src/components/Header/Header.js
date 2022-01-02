import React from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <div className="header__content">
          <h2 className="header__logo">NewsExplorer</h2>
          <nav className="header__nav">
            <NavLink
              exact
              to="/"
              className="header__link"
              activeClassName="header__link_active"
            >
              Home
            </NavLink>
            <button className="header__button">Sign in</button>
          </nav>
      </div>
    </header>
  );
}

export default Header;
