import React from "react";

/* Image */
import ErrorImg from "./ErrorImg";

const ErrorPage = () => {
  return (
    <section className="error_page">
      <ErrorImg />
      <p>
        <span className="ht_text">Oops!</span> It looks like the page
        you&apos;re trying to reach doesn&apos;t exist. Let&apos;s head back to
        the home page.
      </p>
    </section>
  );
};

export default ErrorPage;
