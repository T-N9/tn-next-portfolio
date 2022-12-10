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

const HomePageLayout = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCurrentPage("Home"));
  }, []);

  return (
    <>
      <Transitions>
        <div className="nav_spacer"></div>
        <HomeHero />
        <div id="portfolio">
          <HomeProject />
        </div>
        {/* <Testimonials />
        <HomeSkills />
        <HomeContact />
        <Footer /> */}
      </Transitions>
    </>
  );
};

export default HomePageLayout;
