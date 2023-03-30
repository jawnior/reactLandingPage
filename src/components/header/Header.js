import React from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';

export function Header() {

  const navLinkStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? 'bold' : 'normal',
    }
  }

  return (
    <nav>
      <p className="title">USŁUGI GEODEZYJNE JAN KOWALSKI</p>
      <ul className="navlinks">
        <NavLink className="about-me" to="/" style={navLinkStyles}>O mnie</NavLink>
        <NavLink className="menu" to="oferta" style={navLinkStyles}>Oferta</NavLink>
        <NavLink className="testimonials" to="zaufali-mi" style={navLinkStyles}>Zaufali mi</NavLink>
        <NavLink className="contact" to="kontakt" style={navLinkStyles}>Kontakt</NavLink>
        <NavLink className="english">English</NavLink>
      </ul>
    </nav>
  )
}
