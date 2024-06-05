import React from 'react';
import Nav from '../nav/nav';
import '../Home/Home.css';
import logo from '../assets/logo_desktop.png';
import img_home from '../assets/img_home.png';
import Gallery from '../components/Gallery';
import Footercomp from '../components/Footercomp';

const HomeKasa = () => {
    return (
        <div className="home-kasa">
            <HeaderComp />
            <Nav />
            <main className="main-content">
                <section className="">
                    <img src={img_home} alt="Première image source Home" className="img-home" />
                    <Gallery />
                </section>
            </main>
            <Footercomp /> 
        </div>
    );
};

export default HomeKasa;