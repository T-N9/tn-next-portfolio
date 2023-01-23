import React from "react";
import Head from "next/head";

/* Layout */
import { WorkPageLayout } from "../Layouts";

const Work = () => {
  return (
    <>
      <Head>
        <meta charset="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#1192d3" />
        <meta name="title" content="Works | My project experience" />
        <meta
          name="description"
          content="Explore the portfolio of a creative front-end developer, who specialized in building modern, responsive websites and web applications using the latest technologies such as React & Next JS. Discover a passion for intuitive design and ideas."
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
        <title>Works | My project experience</title>
        <meta name="title" content="Works | My project experience" />
        <meta
          name="description"
          content="Explore the portfolio of a creative front-end developer, who specialized in building modern, responsive websites and web applications using the latest technologies such as React & Next JS. Discover a passion for intuitive design and ideas."
        />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.tenyain.com/works" />
        <meta property="og:title" content="Works | My project experience" />
        <meta
          property="og:description"
          content="Explore the portfolio of a creative front-end developer, who specialized in building modern, responsive websites and web applications using the latest technologies such as React & Next JS. Discover a passion for intuitive design and ideas."
        />
        <meta property="og:image" content="meta-tn.png" />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.tenyain.com/works" />
        <meta
          property="twitter:title"
          content="Works | My project experience"
        />
        <meta
          property="twitter:description"
          content="Explore the portfolio of a creative front-end developer, who specialized in building modern, responsive websites and web applications using the latest technologies such as React & Next JS. Discover a passion for intuitive design and ideas."
        />
        <meta property="twitter:image" content="meta-tn.png" />

        <meta
          name="google-site-verification"
          content="nstIYPUM8pyaUUrW69SvgmJkxRRe_hS9tN_VAfzoLeI"
        />
        <title>Works | My project experience</title>
      </Head>
      <main>
        <WorkPageLayout />
      </main>
    </>
  );
};

export default Work;
