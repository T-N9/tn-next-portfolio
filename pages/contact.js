import React from "react";
import Head from "next/head";

/* Layout */
import ContactPageLayout from "../Layouts/Layout.Contact";

const Contact = () => {
  return (
    <>
      <Head>
        <meta charset="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#1192d3" />
        <meta name="title" content="TAILOR THE WEB with TN.dev" />
        <meta
          name="description"
          content="Hire a highly skilled front-end developer for your next project. With expertise in branding and front-end technologies such as React and Next JS, this freelancer offers responsive and visually stunning website and web application development. Available for remote and freelance work opportunities."
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
        <title>TAILOR THE WEB with TN.dev</title>
        <meta name="title" content="TAILOR THE WEB with TN.dev" />
        <meta
          name="description"
          content="Hire a highly skilled front-end developer for your next project. With expertise in branding and front-end technologies such as React and Next JS, this freelancer offers responsive and visually stunning website and web application development. Available for remote and freelance work opportunities."
        />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.tenyain.com/contact/" />
        <meta property="og:title" content="TAILOR THE WEB with TN.dev" />
        <meta
          property="og:description"
          content="Hire a highly skilled front-end developer for your next project. With expertise in branding and front-end technologies such as React and Next JS, this freelancer offers responsive and visually stunning website and web application development. Available for remote and freelance work opportunities."
        />
        <meta property="og:image" content="meta-tn.png" />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://www.tenyain.com/contact/"
        />
        <meta property="twitter:title" content="TAILOR THE WEB with TN.dev" />
        <meta
          property="twitter:description"
          content="Hire a highly skilled front-end developer for your next project. With expertise in branding and front-end technologies such as React and Next JS, this freelancer offers responsive and visually stunning website and web application development. Available for remote and freelance work opportunities."
        />
        <meta property="twitter:image" content="meta-tn.png" />

        <meta
          name="google-site-verification"
          content="nstIYPUM8pyaUUrW69SvgmJkxRRe_hS9tN_VAfzoLeI"
        />
        <title>TAILOR THE WEB with TN.dev</title>
      </Head>
      <main>
        <ContactPageLayout />
      </main>
    </>
  );
};

export default Contact;
