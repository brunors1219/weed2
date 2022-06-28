import Head from "next/head";
import Body from "../components/pages/Body";
import Header from "../components/pages/Header1";
import Footer from "../components/pages/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>GTA Fotos</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Poppins:400,400i,500,600,700|Ubuntu:400,500,700&display=swap"
        />
        <link rel="stylesheet" href="assets/css/bootstrap.min.css" />
        <link rel="stylesheet" href="assets/css/animate.min.css" />
        <link rel="stylesheet" href="assets/css/scrolltop.css" />
        <link rel="stylesheet" href="assets/css/default.css" />
        <link rel="stylesheet" href="assets/css/wedget.css" />
        <link rel="stylesheet" href="assets/css/style.css" />
        <link rel="stylesheet" href="assets/css/responsive.css" />
        <link rel="stylesheet" href="assets/css/btWhatsapp.css" />

      </Head>

      <Header />
      <Body />
      <Footer />
    </>
  );
}
