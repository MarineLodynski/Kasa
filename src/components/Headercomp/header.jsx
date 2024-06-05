import React from 'react';
import Nav from '../nav/nav';
import './header.css';
import logo from '../assets/logo_desktop.png';

const Header = () => {
    return (
       <header className="header">
        <span className="logo_kasa">
            <img src={logo} alt="Logo de l'application Kasa"/>
        </span>
        <Nav />
       </header> 
    );
};

export default Header;
