import React from "react";
import Head from "next/head";

/* Layout */
import { PrivacyPolicyLayout } from "../Layouts";

const PrivacyPolicy = ({
  handleLoading
}) => {
  return (
    <>
      <Head>
        <meta charset="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#1192d3" />
        <meta name="title" content="Writing | Te Nyain's thoughts" />
        <meta
          name="description"
          content="Privacy and policy for tenyain.com"
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
        <title>Privacy & Policy</title>
        <meta name="title" content="Privacy & Policy" />
        <meta
          name="description"
          content="Privacy and policy for tenyain.com"
        />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.tenyain.com/writing/" />
        <meta property="og:title" content="Privacy & Policy" />
        <meta
          property="og:description"
          content="Privacy and policy for tenyain.com"
        />
        <meta property="og:image" content="meta-tn.png" />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.tenyain.com/writing/" />
        <meta property="twitter:title" content="Privacy & Policy" />
        <meta
          property="twitter:description"
          content="Privacy and policy for tenyain.com"
        />
        <meta property="twitter:image" content="meta-tn.png" />

        <meta
          name="google-site-verification"
          content="nstIYPUM8pyaUUrW69SvgmJkxRRe_hS9tN_VAfzoLeI"
        />
        <title>Privacy & Policy</title>
      </Head>
      <main>
        <PrivacyPolicyLayout/>
      </main>
    </>
  );
};

export default PrivacyPolicy;
