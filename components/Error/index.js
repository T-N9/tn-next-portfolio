import React from "react";

/* Image */
import ErrorImg from "./ErrorImg";

const ErrorPage = () => {
  return (
    <section className="error_page">
      <ErrorImg />
      <p>
        <span className="ht_text">Oops!</span> It looks like the page you're trying to reach doesn't exist. Let's
        head back to the home page.
      </p>
    </section>
  );
};

export default ErrorPage;
