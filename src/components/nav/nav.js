import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <nav>
            <li><Link to="/Home">Accueil</Link></li>
            <li><Link to="/About">À propos</Link></li>
        </nav>
    );
};

export default Nav;