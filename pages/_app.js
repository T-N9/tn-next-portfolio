import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import App from "next/app";

/* CSS */
import "../styles/globals.scss";
import "css.gg/icons/css/spinner.css";

/* Redux */
import { Provider } from "react-redux";
import store from "../store/store";

/* Components */
import { NavBar, Footer, GlobalLoad } from "../components";

/* Wrapper */
import ThemeWrapper from "../wrapper/ThemeWrapper";
import { ThemeProvider } from "next-themes";

import { AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const targetPath = router.asPath;

  // useEffect(() => {
  //   const handleStart = (url) => {
  //     if (url !== router.asPath) {
  //       // console.log("Route Start.", { url, asPath: router.asPath });
  //       setIsLoading(true);

  //       setTimeout(() => {
  //         setIsLoading(false);
  //       }, 3000);
  //     }
  //   };
  //   const handleComplete = (url) => {
  //     if (url === router.asPath) {
  //       // console.log("Route End.", { url, asPath: router.asPath });
  //       setIsLoading(false);
  //     }
  //   };

  //   router.events.on("routeChangeStart", handleStart);
  //   router.events.on("routeChangeComplete", handleComplete);
  //   router.events.on("routeChangeError", handleComplete);

  //   return () => {
  //     router.events.off("routeChangeStart", handleStart);
  //     router.events.off("routeChangeComplete", handleComplete);
  //     router.events.off("routeChangeError", handleComplete);
  //   };
  // }, [JSON.stringify(router), router, targetPath]);

  // const maintenance = false;

  return (
    <AnimatePresence exitBeforeEnter>
      <Provider store={store}>
        <ThemeProvider attribute="class">
          <ThemeWrapper>
            {/* <GlobalLoad loading={isLoading} isLogo={true} /> */}

            {/* {!isLoading && ( */}
            <>
              <NavBar />
              <div className="nav_spacer"></div>
              <Component {...pageProps} />
              <Footer />
            </>
            {/* )} */}
          </ThemeWrapper>
        </ThemeProvider>
      </Provider>
    </AnimatePresence>
  );
}

MyApp.getInitialProps = async ({ Component, ctx }) => {
  try {
    return await App.getInitialProps(ctx);
  } catch (error) {
    return {
      pageProps: {
        statusCode: error.statusCode || 500,
      },
    };
  }
};

export default MyApp;
