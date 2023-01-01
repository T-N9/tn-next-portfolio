import React, { useEffect } from "react";
import Transitions from "../components/Animated/Transitions";

import { useDispatch } from "react-redux";
import { setCurrentPage } from "../store/slices/NavbarSlice";

/* Components */
import {
  AboutWishing,
  AboutHero,
  HomeAbout,
  AboutTimeline,
  HomeMotto,
  Testimonials,
} from "../components";

const AboutPageLayout = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCurrentPage("About"));
  }, []);
  return (
    <Transitions>
      {/* <AboutWishing /> */}
      <AboutHero />
      <HomeAbout />
      <AboutTimeline />
      <Testimonials />
      <HomeMotto />
    </Transitions>
  );
};

export default AboutPageLayout;
