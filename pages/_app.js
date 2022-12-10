/* CSS */
import "../styles/globals.scss";

/* Redux */
import { Provider } from "react-redux";
import store from "../store/store";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <section className="main_content">
        <Component {...pageProps} />
      </section>
    </Provider>
  );
}

export default MyApp;
