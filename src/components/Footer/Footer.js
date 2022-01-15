import React from 'react';
import './Footer.css';
import fb_icon from '../../images/fb.svg';
import gh_icon from '../../images/github.svg';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__content">
          <p className="footer__text">
            &copy;{new Date().getFullYear()} Devin Jaggernauth | Practicum
          </p>
              <nav className="footer__items">
              	<div className="footer__links">
                	<Link to={'/'} className="footer__link">Home</Link>
                  <a href='https://practicum.yandex.com' className="footer__link" target="_blank" rel='noreferrer' >Practicum by Yandex</a>
              </div>                
              <div className="footer__social-icons">
              	<a href="https://www.github.com/mentalcaries" className="footer__social-icon" target="_blank" rel='noreferrer' ><img src={gh_icon} alt="GitHub Icon" /></a>
                <a href="https://www.facebook.com" className="footer__social-icon" target="_blank" rel='noreferrer'><img src={fb_icon} alt="Facebook Icon" /></a>
                </div>
              </nav>
      </div>
    </footer>
  );
}
export default Footer;
