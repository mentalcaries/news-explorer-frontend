import React from 'react';
import './Footer.css';
import fb_icon from '../../images/fb.svg';
import gh_icon from '../../images/github.svg';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__content">
          <p className="footer__text">
            &copy;{new Date().getFullYear()} Devin Jaggernauth | Practicum
          </p>
              <div className="footer__items">
              	<div className="footer__links">
                	<a href="http://jaggernauth.dev" className="footer__link" target="_blank" rel="noreferrer">Home</a>
                  <a href="https://practicum.yandex.com" className="footer__link" target="_blank" rel="noreferrer">Practicum by Yandex</a>
              </div>                
              <div className="footer__social-icons">
              	<a href="" className="footer__social-icon"><img src={gh_icon} alt="" /></a>
                <a href="" className="footer__social-icon"><img src={fb_icon} alt="" /></a>
                </div>
              </div>
      </div>
    </footer>
  );
}
export default Footer;
