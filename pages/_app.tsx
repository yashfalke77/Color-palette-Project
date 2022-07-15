import React, { useEffect, useState } from "react";
import { AppProps } from "next/app";
import "@styles/scss/global.scss";
import { Provider } from "react-redux";
import store from "@redux/store";
import { appWithTranslation } from "@i18n";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import LoadingBar from 'react-top-loading-bar'
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {

  const router = useRouter()

  const [progress, setProgress] = useState(0)

  useEffect(() => {
    router.events.on("routeChangeStart", () => {
      setProgress(40)
    })
    router.events.on("routeChangeComplete", () => {
      setProgress(100)
    })
  }, [])


  return (
    <>
      <LoadingBar
        height={2}
        // color="linear-gradient(to right, #40e0d0, #ff8c00, #ff0080)"
        color="linear-gradient(to right, #fcb045, #fd1d1d, #833ab4)"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
        waitingTime={300}
      />
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
      />
    </>
  );
}

export default MyApp;
