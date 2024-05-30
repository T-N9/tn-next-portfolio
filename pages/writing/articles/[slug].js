import React from "react";
import Head from "next/head";
import { client, urlFor } from "../../../client";

/* Layout */
import { ArticlePageLayout } from "../../../Layouts";

const ArticleDetail = ({ article, slug }) => {
  return (
    <>
      <Head>
      <meta name="google-adsense-account" content="ca-pub-2340030299315656" />
        <meta charset="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#1192d3" />
        <meta name="title" content={article.title} />
        <meta
          name="description"
          content={`Read my article "${article.title}" and let me know your thoughts.`}
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
        <title>{article.title}</title>
        <meta name="title" content={article.title} />
        <meta
          name="description"
          content={`Read my article "${article.title}" and let me know your thoughts.`}
        />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content={`https://www.tenyain.com/writing/articles/${article.slug.current}`}
        />
        <meta property="og:title" content={article.title} />
        <meta
          property="og:description"
          content={`Read my article "${article.title}" and let me know your thoughts.`}
        />
        <meta property="og:image" content={urlFor(article.titleImage)} />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content={`https://www.tenyain.com/writing/articles/${article.slug.current}`}
        />
        <meta property="twitter:title" content={article.title} />
        <meta
          property="twitter:description"
          content={`Read my article "${article.title}" and let me know your thoughts.`}
        />
        <meta property="twitter:image" content={urlFor(article.titleImage)} />

        <meta
          name="google-site-verification"
          content="nstIYPUM8pyaUUrW69SvgmJkxRRe_hS9tN_VAfzoLeI"
        />
        <title>{article.title}</title>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2340030299315656"
          crossorigin="anonymous"
        ></script>
      </Head>
      <main>
        <ArticlePageLayout data={article} slug={slug} />
      </main>
    </>
  );
};

export default ArticleDetail;

export async function getStaticPaths() {
  const paths = await client.fetch(
    `*[_type == "article" && defined(slug.current)][].slug.current`
  );

  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: "blocking",
  };
}

export async function getStaticProps(context) {
  // It's important to default the slug so that it doesn't return "undefined"
  const { slug = "" } = context.params;
  const article = await client.fetch(
    `
      *[_type == "article" && slug.current == $slug][0]
    `,
    { slug }
  );

  return {
    props: {
      article,
      slug,
    },
    revalidate: 10,
  };
}
