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
              <div className="footer__links">
                  <a href="" className="footer__link">Home</a>
                  <a href="" className="footer__link">Practicum by Yandex</a>
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
