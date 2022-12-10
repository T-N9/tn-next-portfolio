import React from 'react';
import { Link } from 'react-router-dom';

const ServiceIntro = () =>{
    return (
        <section className='service_intro'>
            <p>
                I provide web design development services such as building personal websites, portfolio websites, and
                transforming a web design template into a design functional website.
            </p>

            <Link to={'/services'}>
                <button className='primary_btn'>
                    View services
                </button>
            </Link>
        </section>
    )
}

export default ServiceIntro;