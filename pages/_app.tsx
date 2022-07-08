import React from "react";
import { AppProps } from "next/app";
import "@styles/scss/global.scss";
import { Provider } from "react-redux";
import store from "@redux/store";
import { appWithTranslation } from "@i18n";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';



function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
      <ToastContainer
        position="bottom-center"
        autoClose={500}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        draggable
        limit={3}
        className="Hii"
      />
    </>
  );
}

export default MyApp;
