import React from "react";

const LinkedIn = () => {
  return (
    <section className="linkedIn_wrapper container_sm container_y_1">
      <div className="linkedIn--grid">
        <div>
          <iframe
            src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7034064880357822464"
            height="auto"
            width="auto"
            frameborder="0"
            allowfullscreen=""
            title="Embedded post"
            data-embed-uuid="7034064880357822464"
          ></iframe>
        </div>
        <div>
          <iframe
            src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7031794428130332673"
            height="auto"
            width="auto"
            frameborder="0"
            allowfullscreen=""
            title="Embedded post"
            data-embed-uuid="7031794428130332673"
          ></iframe>
        </div>

        <div>
          <iframe
            src="https://www.linkedin.com/embed/feed/update/urn:li:share:6860842375053504512"
            height="auto"
            width="auto"
            frameborder="0"
            allowfullscreen=""
            title="Embedded post"
            data-embed-uuid="6860842375053504512"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default LinkedIn;
