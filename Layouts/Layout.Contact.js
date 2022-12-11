import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setCurrentPage } from "../store/slices/NavbarSlice";
import Transitions from "../components/Animated/Transitions";

/* Components */
import { ContactHero, HomeContact } from "../components";

const ContactPageLayout = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCurrentPage("Contact"));
  }, []);
  return (
    <Transitions>
      <ContactHero />
      <HomeContact />
    </Transitions>
  );
};

export default ContactPageLayout;
