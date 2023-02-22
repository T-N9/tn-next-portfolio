import React from "react";
import ContactImg from "./ContactImg";
import ContactForm from "./ContactForm";
import LinkedIn from "./LinkedIn";

const HeroContact = () => {
  return (
    <section className="contact_page_wrapper">
      <div className="contact_page">
        <ContactImg />
        <ContactForm />
      </div>

      <LinkedIn/>
    </section>
  );
};

export default HeroContact;
