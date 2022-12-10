import React from 'react';
import HeroImg from './HeroImg';
import HeroTxt from './HeroTxt';

const HomeHero = () => {
    return (
        <section className="hero_page_wrapper">
            <div className="container_sm hero_page">
                <HeroTxt/>
                <HeroImg/>
            </div>
        </section>
    );
}

export default HomeHero;
