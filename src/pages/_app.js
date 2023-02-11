import Footer from "@/component/Shared/Footer";
import Navbar from "@/component/Shared/Navbar";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer/>
    </>
  );
}
