import React from 'react';
import ContactImg from './ContactImg';
import ContactForm from './ContactForm';

const HeroContact = () => {
    return (
        <section className="contact_page_wrapper">
            <div className="contact_page">
                <ContactImg/>
                <ContactForm/>
            </div>
        </section>
    );
}

export default HeroContact;
