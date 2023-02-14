import "source-map-support/register";
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
import { NavBar, Footer } from "../components";

/* Wrapper */
import ThemeWrapper from "../wrapper/ThemeWrapper";
import { ThemeProvider } from "next-themes";

import { AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [navSpace, setNavSpace] = useState(true);

  const excludedPaths = ["/works", "/writing", "/services", "/contact"];

  const targetPath = router.asPath;
  console.log({ targetPath });

  useEffect(() => {
    if (!excludedPaths.includes(targetPath)) {
      setNavSpace(false);
    } else {
      setNavSpace(true);
    }
  }, [targetPath]);

  return (
    <AnimatePresence exitBeforeEnter>
      <Provider store={store}>
        <ThemeProvider attribute="class">
          <ThemeWrapper>
            <>
              <NavBar />
              {!navSpace && <div className="nav_spacer"></div>}

              <Component {...pageProps} />
              <Footer />
            </>
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
