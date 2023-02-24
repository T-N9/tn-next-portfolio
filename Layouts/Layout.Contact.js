import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setCurrentPage } from "../store/slices/NavbarSlice";
import Transitions from "../components/Animated/Transitions";

/* Components */
import { ContactHero, HomeContact, LinkedInSection } from "../components";

const ContactPageLayout = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCurrentPage("Contact"));
  }, []);
  return (
    <Transitions>
      <ContactHero />
      <HomeContact />
      <LinkedInSection/>
    </Transitions>
  );
};

export default ContactPageLayout;
