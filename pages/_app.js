import { useState, useEffect } from "react";
import { useRouter } from "next/router";

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

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const targetPath = router.asPath;

  useEffect(() => {
    const handleStart = (url) => {
      if (url !== router.asPath) {
        // console.log("Route Start.", { url, asPath: router.asPath });
        setIsLoading(true);

        setTimeout(() => {
          setIsLoading(false);
        }, 3000);
      }
    };
    const handleComplete = (url) => {
      if (url === router.asPath) {
        // console.log("Route End.", { url, asPath: router.asPath });
        setIsLoading(false);
      }
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  }, [JSON.stringify(router), router, targetPath]);

  const maintenance = true;

  return (
    <Provider store={store}>
      <ThemeProvider attribute="class">
        <ThemeWrapper>
          <GlobalLoad loading={isLoading} />

          {!isLoading && (
            <>
              {maintenance ? (
                <p>tn.dev in maintenance.</p>
              ) : (
                <>
                  <NavBar />
                  <div className="nav_spacer"></div>
                  <Component {...pageProps} />
                  <Footer />
                </>
              )}
            </>
          )}
        </ThemeWrapper>
      </ThemeProvider>
    </Provider>
  );
}

export default MyApp;
