import React, { useEffect } from "react";
import dynamic from "next/dynamic";
import { useDispatch } from "react-redux";
import { setCurrentPage } from "../store/slices/NavbarSlice";

/* Components */
import Transitions from "../components/Animated/Transitions";

const HomeHero = dynamic(() => import('../components/HomeHero/index'),{ ssr: false });
const HomeProject = dynamic(() => import('../components/HomeProjects/index'));
const HomeSkills = dynamic(() => import('../components/HomeSkills/index'));
const HomeContact = dynamic(() => import('../components/HomeContact/index'));
const Testimonials = dynamic(() => import('../components/Testimonials/index'));
const HomeMotto = dynamic(() => import('../components/HomeMotto/index'));

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
        <HomeMotto/>
      </Transitions>
    </>
  );
};

export default HomePageLayout;
