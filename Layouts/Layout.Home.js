import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setCurrentPage } from "../store/slices/NavbarSlice";

/* Components */
import {
  HomeHero,
  HomeProject,
  HomeSkills,
  HomeContact,
  Testimonials,
  Footer,
} from "../components";
import Transitions from "../components/Animated/Transitions";

import * as Scroll from 'react-scroll';

var Element = Scroll.Element;

const HomePageLayout = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCurrentPage("Home"));
  }, []);

  return (
    <>
      <Transitions>
        <HomeHero />
        <Element name="portfolio_section">
          <div id="portfolio">
            <HomeProject />
          </div>
        </Element>
        <Testimonials />
        <HomeSkills />
        <HomeContact />
        <Footer />
      </Transitions>
    </>
  );
};

export default HomePageLayout;
