import React from "react";
import Head from "next/head";

/* Layout */
import { WritingPageLayout } from "../Layouts";
import AdsComponent from "../components/AdsComponent/AdsComponent";

const Writing = ({ handleLoading }) => {
  return (
    <>
      <Head>
        <meta name="google-adsense-account" content="ca-pub-2340030299315656" />
        <meta charset="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#1192d3" />
        <meta name="title" content="Writing | Te Nyain's thoughts" />
        <meta
          name="description"
          content="Read articles about software engineering, management, front-end development and tips. I would like to write and do some knowledge sharing besides
          development."
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
        <title>Writing | Te Nyain&apos;s thoughts</title>
        <meta name="title" content="Writing | Te Nyain's thoughts" />
        <meta
          name="description"
          content="Read articles about software engineering, management, front-end development and tips. I would like to write and do some knowledge sharing besides
          development."
        />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.tenyain.com/writing/" />
        <meta property="og:title" content="Writing | Te Nyain's thoughts" />
        <meta
          property="og:description"
          content="Read articles about software engineering, management, front-end development and tips. I would like to write and do some knowledge sharing besides
          development."
        />
        <meta property="og:image" content="meta-tn.png" />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://www.tenyain.com/writing/"
        />
        <meta
          property="twitter:title"
          content="Writing | Te Nyain's thoughts"
        />
        <meta
          property="twitter:description"
          content="Read articles about software engineering, management, front-end development and tips. I would like to write and do some knowledge sharing besides
          development."
        />
        <meta property="twitter:image" content="meta-tn.png" />

        <meta
          name="google-site-verification"
          content="nstIYPUM8pyaUUrW69SvgmJkxRRe_hS9tN_VAfzoLeI"
        />
        <title>Writing | Te Nyain&apos;s thoughts</title>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2340030299315656"
          crossorigin="anonymous"
        ></script>
      </Head>
      <main>
        <WritingPageLayout handleLoading={handleLoading} />
      </main>
      <AdsComponent isDisplay={true} slotId={"3655775912"} />
    </>
  );
};

export default Writing;
