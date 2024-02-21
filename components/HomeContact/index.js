import React from "react";
import ContactImg from "./ContactImg";
import ContactForm from "./ContactForm";

import ScrollRevealDiv from '../common/ScrollRevealDiv';

const HeroContact = () => {
  return (
    <section className="contact_page_wrapper container_sm">
      <ScrollRevealDiv>
        <div className="contact_page ">
          <ContactImg />
          <ContactForm />
        </div>
      </ScrollRevealDiv>
    </section>
  );
};

export default HeroContact;
