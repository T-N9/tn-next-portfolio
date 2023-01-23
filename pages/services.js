import React from "react";
import Head from "next/head";

/* Layout */
import ServicesPageLayout from "../Layouts/Layout.Services";

const Services = () => {
  return (
    <>
      <Head>
        <meta charset="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#1192d3" />
        <meta name="title" content="Services | Features and Technologies I provide" />
        <meta
          name="description"
          content="As a front-end web developer, I make sure that my website has good design qualities, from colors, and typography to clean coding and performance. I care about your business values and targeted customers to meet your golden goals for tomorrow."
        />
        <meta
          name="keywords"
          content="Te Nyain Moe Lwin, Te Nyain, Moe Lwin, Moe, web, web developer, web development, front-end, UI, Myanmar, junior web developer, job, freelance, promoting, branding, product branding, creative"
        />
        <meta name="robots" content="index, follow" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="author" content="Te Nyain Moe Lwin" />
        <meta property="og:locale" content="en-US" />

        {/* <!-- Primary Meta Tags --> */}
        <title>Services | Features and Technologies I provide</title>
        <meta name="title" content="Services | Features and Technologies I provide" />
        <meta
          name="description"
          content="As a front-end web developer, I make sure that my website has good design qualities, from colors, and typography to clean coding and performance. I care about your business values and targeted customers to meet your golden goals for tomorrow."
        />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.tenyain.com/services/" />
        <meta property="og:title" content="Services | Features and Technologies I provide" />
        <meta
          property="og:description"
          content="As a front-end web developer, I make sure that my website has good design qualities, from colors, and typography to clean coding and performance. I care about your business values and targeted customers to meet your golden goals for tomorrow."
        />
        <meta property="og:image" content="meta-tn.png" />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.tenyain.com/services/" />
        <meta
          property="twitter:title"
          content="Services | Features and Technologies I provide"
        />
        <meta
          property="twitter:description"
          content="As a front-end web developer, I make sure that my website has good design qualities, from colors, and typography to clean coding and performance. I care about your business values and targeted customers to meet your golden goals for tomorrow."
        />
        <meta property="twitter:image" content="meta-tn.png" />

        <meta
          name="google-site-verification"
          content="nstIYPUM8pyaUUrW69SvgmJkxRRe_hS9tN_VAfzoLeI"
        />
        <title>Services | Features and Technologies I provide</title>
      </Head>
      <main>
        <ServicesPageLayout />
      </main>
    </>
  );
};

export default Services;
