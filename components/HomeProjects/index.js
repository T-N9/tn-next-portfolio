import React from 'react';
import Header from './Header';
import SwiperCards from './SwiperCards';

const HomeProject = () => {
    return (
        <section className="portfolio_page_wrapper">
            <div className="portfolio_page">
                <Header/>
                <SwiperCards/>
            </div>
        </section>
    );
}

export default HomeProject;
