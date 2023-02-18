import Footer from "@/component/Shared/Footer";
import Navbar from "@/component/Shared/Navbar";
import store from "@/redux/store";
import "@/styles/globals.css";
import { Provider } from "react-redux";
export default function App({ Component, pageProps }) {

  return (
    <>
        <Provider store={store}>
          <Navbar />
          <Component {...pageProps} />
          <Footer />
        </Provider>
    </>
  );
}
