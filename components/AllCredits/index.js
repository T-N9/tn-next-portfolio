import React from "react";

const AllCredits = () => {
  return (
    <section className="credit-section">
      <div className="credit-section--wrapper container">
        <div>
          <h1>
            All Vectors, SVGs, and Icons used in this website have their
            rightful owners.
          </h1>

          <ul>
            <li>
              traditional english letter boxes,{" "}
              <a href="https://www.freepik.com/free-vector/traditional-english-letterboxes-set-red-blue-vintage-mailboxes-old-postboxes-with-letters-isolated-white-background_12699873.htm">
                Image by pch.vector
              </a>{" "}
              on Freepik
            </li>
            <li>
              plastic-toy-blocks-background, Image by{" "}
              <a href="https://www.freepik.com/free-vector/plastic-toy-blocks-background_1170490.htm#query=plastic%20blocks&position=48&from_view=keyword">
                Freepik
              </a>
            </li>

            <li>
                SVG illustrations by <a href="https://illlustrations.co/">Illustrations.co</a>
            </li>

            <li>
              UI design and development by <span className="ht_text">Te Nyain Moe Lwin</span> 
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AllCredits;
