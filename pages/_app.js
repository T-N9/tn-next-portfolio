import "source-map-support/register";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import App from "next/app";
import { appWithTranslation } from 'next-i18next';
import '../i18n';

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

/* Constants */
import { excludedPaths } from "../constants/pages";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [navSpace, setNavSpace] = useState(true);

  const targetPath = router.asPath;

  useEffect(() => {
    if (!excludedPaths.includes(targetPath)) {
      setNavSpace(false);
    } else {
      setNavSpace(true);
    }
  }, [targetPath]);

  return (
    <AnimatePresence mode="wait">
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

export default appWithTranslation(MyApp);
