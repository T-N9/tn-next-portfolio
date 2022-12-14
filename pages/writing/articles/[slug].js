import React from "react";
import Head from "next/head";
import { client } from "../../../client";

/* Layout */
import { ArticlePageLayout } from "../../../Layouts";

const ArticleDetail = ({ article, slug }) => {
  return (
    <>
      <Head></Head>
      <main>
        <ArticlePageLayout data={article} />
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
    fallback: false,
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
  };
}
