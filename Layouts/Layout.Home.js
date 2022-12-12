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
        <HomeHero />
        <HomeProject />
        <Testimonials />
        <HomeSkills />
        <HomeContact />
      </Transitions>
    </>
  );
};

export default HomePageLayout;
