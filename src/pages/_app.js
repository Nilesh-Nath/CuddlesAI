import "@/styles/globals.css";
import "../../public";
import { Header } from "../../components";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>CuddlesAI | NFT Generate/Minter</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
