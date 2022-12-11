import React, { useEffect } from "react";
import Transitions from "../components/Animated/Transitions";
import { useDispatch } from "react-redux";
import { setCurrentPage } from "../store/slices/NavbarSlice";

/* Components */
import { PortfolioHero, PortfolioProjects } from "../components";

const WorkPageLayout = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCurrentPage("Works"));
  }, []);
  return (
    <Transitions>
      <section className="portfolio_route_wrapper">
        <PortfolioHero />
        <div className="content_wrapper">
          <PortfolioProjects />
        </div>
      </section>
    </Transitions>
  );
};

export default WorkPageLayout;
