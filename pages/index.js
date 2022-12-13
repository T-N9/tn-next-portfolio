import Head from "next/head";
/* Layout */
import { HomePageLayout } from "../Layouts";
import Script from "next/script";

export default function Home() {
  return (
    <>
      <Head>
        {/* <!-- Google tag (gtag.js) --> */}
        {/* <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-LTSQJ48F8N"
        ></script>
        <script id="google-tag">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'G-LTSQJ48F8N');`}
        </script> */}
        <meta charset="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#1192d3" />
        <meta name="title" content="TeNyain | Creative Front-end developer" />
        <meta
          name="description"
          content="Hello there, I am TeNyain, a front-end developer who delivers fast and reliable websites."
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
        <title>TeNyain | Creative Front-end developer</title>
        <meta name="title" content="TeNyain | Creative Front-end developer" />
        <meta
          name="description"
          content="Hello there, I am TeNyain, a front-end developer who delivers fast and reliable websites."
        />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.tenyain.com/" />
        <meta
          property="og:title"
          content="TeNyain | Creative Front-end developer"
        />
        <meta
          property="og:description"
          content="Hello there, I am TeNyain, a front-end developer who delivers fast and reliable websites."
        />
        <meta property="og:image" content="meta-tn.png" />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.tenyain.com/" />
        <meta
          property="twitter:title"
          content="TeNyain | Creative Front-end developer"
        />
        <meta
          property="twitter:description"
          content="Hello there, I am TeNyain,
          a front-end developer who delivers fast and reliable websites."
        />
        <meta property="twitter:image" content="meta-tn.png" />

        <meta
          name="google-site-verification"
          content="nstIYPUM8pyaUUrW69SvgmJkxRRe_hS9tN_VAfzoLeI"
        />
        <title>TeNyain | Creative Front-end developer</title>
      </Head>

      <main>
        <HomePageLayout />
      </main>
    </>
  );
}
