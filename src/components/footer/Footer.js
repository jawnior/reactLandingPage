import React from 'react';
import './Footer.css';

export function Footer() {
  return (
    <div id="footer">
      <div className="contact-container">
        <div className="phone">
          <i className="fa fa-phone"></i>
          <a href="tel:+48123123123">+48 123 123 123</a>
        </div>
        <div className="email">
          <i className="fa fa-envelope"></i>
          <a href="mailto:test@mail.com">test@mail.com</a>
        </div>
        <div className="address">
          <i className="fa fa-home"></i>
          <a href="https://www.google.pl/maps/place/Rynek+G%C5%82%C3%B3wny/@50.0618971,19.9345672,17z/data=!3m1!4b1!4m5!3m4!1s0x47165b120455da67:0xc3c7f5071b750d33!8m2!3d50.0618971!4d19.9367559" target="_blank" rel="noreferrer">11-111 Kraków, Rynek Główny 6</a>
        </div>
      </div>
    </div>
  )
}

