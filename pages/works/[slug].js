import React from "react";
import Head from "next/head";
import { client } from "../../client";

const ProjectDetail = ({ project }) => {
  console.log({ project });
  return (
    <>
      <Head>
        <title>
          {project.title}
        </title>
      </Head>
      <div>
        <h1>Hello Project</h1>
      </div>
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
    },
  };
}
