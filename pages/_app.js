import { useState, useEffect } from "react";
import { useRouter } from "next/router";

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

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const handleStart = (url) => url !== router.asPath && setIsLoading(true);
    const handleComplete = (url) =>
      url === router.asPath && setIsLoading(false);

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  }, [router]);
  return (
    <Provider store={store}>
      <ThemeProvider attribute="class">
        <ThemeWrapper>
          {/* {isLoading ? (
            <div
              className={
                isLoading ? "loading_page visible" : "loading_page hidden"
              }
            >
              <i className={`gg-${"spinner"}`}></i>
            </div>
          ) : ( */}

          <div
            className={
              isLoading ? "loading_page visible" : "loading_page hidden"
            }
          >
            <i className={`gg-${"spinner"}`}></i>
          </div>

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
  );
}

export default MyApp;
