import React from "react";
import Head from "next/head";

/* Layout */
import { WritingPageLayout } from "../Layouts";

const Writing = () => {
  // const [blogData, setBlogData] = useState(null);

  // useEffect(() => {
  //   const query = '*[_type == "category"]';
  //   client.fetch(query).then((data) => {
  //     setBlogData(data);
  //     console.log({ data });
  //   });
  // }, []);

  return (
    <>
      <Head></Head>
      <main>
        <WritingPageLayout />
      </main>
    </>
  );
};

export default Writing;
