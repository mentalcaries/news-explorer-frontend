import React from 'react';
import Navigation from '../Navigation/Navigation';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header__content">
          <h2 className="header__logo">NewsExplorer</h2>
        <Navigation loggedIn={true}/>
      </div>
    </header>
  );
}

export default Header;
