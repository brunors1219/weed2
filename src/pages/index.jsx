import Head from "next/head";
import Feature from "../components/pages/Feature";
import Pricing from "../components/pages/Pricing";
import Hero from "../components/pages/Hero";
import Layout from "../components/pages/Layout/Layout";

export default function Home() {
  return (
    <>
      <Head>
        <title>VPN Best Landingpage </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        {/* <Hero />
        <Feature />
        <Pricing /> */}
      </Layout>
    </>
  );
}
