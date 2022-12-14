import React from "react";
import Head from "next/head";

/* Layout */
import { WritingPageLayout } from "../Layouts";

const Writing = () => {
  return (
    <>
      <Head>
        <meta charset="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#1192d3" />
        <meta name="title" content="Writing | TeNyain's thoughts" />
        <meta
          name="description"
          content="I would like to write and do some knowledge sharing besides
          development."
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
        <title>Writing | TeNyain&apos;s thoughts</title>
        <meta name="title" content="Writing | TeNyain&apos;s thoughts" />
        <meta
          name="description"
          content="I would like to write and do some knowledge sharing besides
          development."
        />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.tenyain.com/writing/" />
        <meta property="og:title" content="Writing | TeNyain&apos;s thoughts" />
        <meta
          property="og:description"
          content="I would like to write and do some knowledge sharing besides
          development."
        />
        <meta property="og:image" content="meta-tn.png" />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.tenyain.com/writing/" />
        <meta property="twitter:title" content="Writing | TeNyain&apos;s thoughts" />
        <meta
          property="twitter:description"
          content="I would like to write and do some knowledge sharing besides
          development."
        />
        <meta property="twitter:image" content="meta-tn.png" />

        <meta
          name="google-site-verification"
          content="nstIYPUM8pyaUUrW69SvgmJkxRRe_hS9tN_VAfzoLeI"
        />
        <title>Writing | TeNyain&apos;s thoughts</title>
      </Head>
      <main>
        <WritingPageLayout />
      </main>
    </>
  );
};

export default Writing;
