import React from "react";
import Bricks from "./Bricks";

const HomeMotto = () => {
  return (
    <section className="motto_page_wrapper">
      <div className="motto_page">
        <h1>
          “ If I cannot build a wall, I will lay a brick every day one by one
          until it becomes a wall. “
        </h1>

        <div className="bricks">
          <Bricks />
        </div>
      </div>
    </section>
  );
};

export default HomeMotto;
