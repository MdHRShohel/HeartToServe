import HomeContainer from "@/component/Home/HomeContainer";
import { Poppins } from "@next/font/google";
import Head from "next/head";

const poppins = Poppins({ weight: ["700", "400"], preload: false });

export default function Home() {
  return (
    <>
      <Head>
        <title>HEART TO SERVE</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* google font */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Anton&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${poppins.className} overflow-x-hidden`}>
        <HomeContainer />
      </main>
    </>
  );
}
