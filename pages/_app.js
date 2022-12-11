/* CSS */
import "../styles/globals.scss";
import { useState, useEffect } from "react";
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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setInterval(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <Provider store={store}>
      <ThemeProvider attribute="class">
        <ThemeWrapper>
          <NavBar />
          <div className="nav_spacer"></div>
          <Component {...pageProps} />
          <Footer/>
        </ThemeWrapper>
      </ThemeProvider>
    </Provider>
  );
}

export default MyApp;
