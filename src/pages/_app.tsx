import { AppProps } from "next/app";
import Layout from "@/Layout/Layout";
import { GlobalStyles } from "@/styles/globals";
import { Provider } from "react-redux";
import { store } from "@/redux/store/store";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <GlobalStyles />
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <ToastContainer />
    </Provider>
  );
}
