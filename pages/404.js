import { ErrorPage } from "../components";
import Head from "next/head";

const NotFound = () => (
  <>
  <Head>
    <title>Page Not Found!</title>
  </Head>
      <div>
        <ErrorPage/>
      </div>
  </>
);

export default NotFound;
