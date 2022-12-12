import React from "react";
import Head from "next/head";
import { client } from "../../client";

/* Layout */
import { ProjectDetailPageLayout } from "../../Layouts";

const ProjectDetail = ({ project, slug }) => {
  return (
    <>
      <Head>
        <meta charset="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#1192d3" />
        <meta name="title" content={project?.title} />
        <meta name="description" content={project?.description} />
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
        <title>About TeNyain | Who am I?</title>
        <meta name="title" content={project?.title} />
        <meta name="description" content={project?.description} />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://www.tenyain.com/works/${slug}`} />
        <meta property="og:title" content={project?.title} />
        <meta property="og:description" content={project?.description} />
        <meta property="og:image" content="meta-tn.png" />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content={`https://www.tenyain.com/works/${slug}`}
        />
        <meta property="twitter:title" content={project?.title} />
        <meta property="twitter:description" content={project?.description} />
        <meta property="twitter:image" content="meta-tn.png" />

        <meta
          name="google-site-verification"
          content="nstIYPUM8pyaUUrW69SvgmJkxRRe_hS9tN_VAfzoLeI"
        />
        <title>{project?.title}</title>
      </Head>
      <main>
        <ProjectDetailPageLayout data={project} slug={slug} />
      </main>
    </>
  );
};

export default ProjectDetail;

export async function getStaticPaths() {
  const paths = await client.fetch(
    `*[_type == "projects" && defined(slug.current)][].slug.current`
  );

  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: true,
  };
}

export async function getStaticProps(context) {
  // It's important to default the slug so that it doesn't return "undefined"
  const { slug = "" } = context.params;
  const project = await client.fetch(
    `
      *[_type == "projects" && slug.current == $slug][0]
    `,
    { slug }
  );

  return {
    props: {
      project,
      slug,
    },
  };
}
