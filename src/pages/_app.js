import Footer from "@/component/Shared/Footer";
import Navbar from "@/component/Shared/Navbar";
import store from "@/redux/store";
import "@/styles/globals.css";
import { Provider } from "react-redux";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query'

const queryClient = new QueryClient()


export default function App({ Component, pageProps }) {

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <Navbar />
          <Component {...pageProps} />
          <Footer />
        </Provider>
      </QueryClientProvider>
    </>
  );
}
