import React from 'react';
import MediaLeft from './MediaLeft';
import AboutContent from './AboutContent';
import MediaRight from './MediaRight';

const HomeAbout = () => {
    return (
        <section className="about_page_wrapper">
            <div className="container about_page">
                <MediaLeft/>
                <AboutContent/>
                <MediaRight/>
            </div>
        </section>
    );
}

export default HomeAbout;
