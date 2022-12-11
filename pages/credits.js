import React from "react";
import Head from "next/head";

/* Layout */
import CreditPageLayout from "../Layouts/Layout.Credits";

const Credits = () => {
  return (
    <>
      <Head>
        <meta charset="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#1192d3" />
        <meta name="title" content="Thank you for all supports." />
        <meta
          name="description"
          content="All Vectors, SVGs, and Icons used in this website have their rightful owners."
        />
        <meta
          name="keywords"
          content="Te Nyain Moe Lwin, TeNyain, Moe Lwin, Moe, web, web developer, web development, front-end, UI, Myanmar, junior web developer, job, freelance, promoting, branding, product branding, creative"
        />
        <meta name="robots" content="index, follow" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="author" content="TeNyain Moe Lwin" />
        <meta property="og:locale" content="en-US" />

        {/* <!-- Primary Meta Tags --> */}
        <title>Thank you for all supports.</title>
        <meta name="title" content="Thank you for all supports." />
        <meta
          name="description"
          content="All Vectors, SVGs, and Icons used in this website have their rightful owners."
        />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.tenyain.com/credits/" />
        <meta property="og:title" content="Thank you for all supports." />
        <meta
          property="og:description"
          content="All Vectors, SVGs, and Icons used in this website have their rightful owners."
        />
        <meta property="og:image" content="meta-tn.png" />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://www.tenyain.com/credits/"
        />
        <meta property="twitter:title" content="Thank you for all supports." />
        <meta
          property="twitter:description"
          content="All Vectors, SVGs, and Icons used in this website have their rightful owners."
        />
        <meta property="twitter:image" content="meta-tn.png" />

        <meta
          name="google-site-verification"
          content="nstIYPUM8pyaUUrW69SvgmJkxRRe_hS9tN_VAfzoLeI"
        />
        <title>Thank you for all supports.</title>
      </Head>
      <main>
        <CreditPageLayout />
      </main>
    </>
  );
};

export default Credits;
