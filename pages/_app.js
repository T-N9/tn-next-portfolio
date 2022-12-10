/* CSS */
import "../styles/globals.scss";
import { useState, useEffect } from "react";
import "css.gg/icons/css/spinner.css";

/* Redux */
import { Provider } from "react-redux";
import store from "../store/store";

/* Components */
import { NavBar } from "../components";

/* Wrapper */
import ThemeWrapper from "../wrapper/ThemeWrapper";

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setInterval(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <Provider store={store}>
      <ThemeWrapper>
        <NavBar />
        <Component {...pageProps} />
      </ThemeWrapper>
    </Provider>
  );
}

export default MyApp;
