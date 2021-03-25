import React from 'react';
import './header.scss';
import logo from '../../images/logo-3.jpg';
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const header = props => {
  return (
    <header className="header">
      <Link to="/" className="header__logo">
        <img src={logo} alt="logo" />
      </Link>
      <section 
        className="header__btn"
        onClick={props.showNavList}>
        <FaBars />
      </section>
      {props.children}
    </header>
  );
}

export default header;
