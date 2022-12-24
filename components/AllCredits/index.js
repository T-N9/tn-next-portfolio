import React from "react";

const AllCredits = () => {
  return (
    <section className="credit-section">
      <div className="credit-section--wrapper container">
        <div className="container_x_sm">
          <h1>
            All <span className="ht_text">Vectors</span>,{" "}
            <span className="ht_text">SVGs</span>, and{" "}
            <span className="ht_text">Icons</span> used in this website have
            their rightful owners.
          </h1>

          <ul className="thankYou_ul">
            <li>
              Traditional english letter boxes,{" "}
              <a href="https://www.freepik.com/free-vector/traditional-english-letterboxes-set-red-blue-vintage-mailboxes-old-postboxes-with-letters-isolated-white-background_12699873.htm">
                Image by pch.vector
              </a>{" "}
              on Freepik
            </li>
            <li>
              Plastic-toy-blocks-background, Image by{" "}
              <a href="https://www.freepik.com/free-vector/plastic-toy-blocks-background_1170490.htm#query=plastic%20blocks&position=48&from_view=keyword">
                Freepik
              </a>
            </li>

            <li>
              SVG illustrations by{" "}
              <a href="https://illlustrations.co/">Illustrations.co</a>
            </li>

            <li>
              UI design and development by{" "}
              <span className="ht_text">Te Nyain Moe Lwin</span>
            </li>

            <li>
              I would like to thank Mr.{" "}
              <a
                href="https://www.jerome-kalumbu.com/"
                target="_blank"
                rel="noreferrer"
              >
                Jerome Kalumbu
              </a>{" "}
              who reviewed my portfolio and gave me guidance to improve User
              Experience of this project. His review process is comprehensible
              and right on point along with his past experience. Jerome recently
              launched a book named{" "}
              <a
                href="https://jeromekalumbu.gumroad.com/l/dont-start-with-visuals"
                target="_blank"
                rel="noreferrer"
              >
                &quot;Don&apos;t start with visuals&quot;
              </a>{" "}
              and you can also check out for his website review process.
            </li>
            <li>
              I thank my family for all understanding and supporting along my
              journey. Special thanks to my brother who prepared me delicious
              meals while I am working on my projects.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AllCredits;
