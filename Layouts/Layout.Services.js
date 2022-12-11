import React, { useEffect } from "react";
import Transitions from "../components/Animated/Transitions";
import { useDispatch } from "react-redux";
import { setCurrentPage } from "../store/slices/NavbarSlice";

import { ServiceHero, ServiceBody } from "../components";

const ServicesPageLayout = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCurrentPage("Services"));
  }, []);
  return (
    <Transitions>
      <ServiceHero />
      <ServiceBody />
    </Transitions>
  );
};

export default ServicesPageLayout;
