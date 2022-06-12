import { ChakraProvider } from '@chakra-ui/react';
import GlobalStyle from '../styles/global';
import "@fontsource/great-vibes";
import { StrictMode } from "react";
import "../styles/tailwind.css";
import "../styles/slick.css";

export default function Website({ Component, pageProps }) {
  return (
    <StrictMode>
      <ChakraProvider>
        <GlobalStyle />
        <Component {...pageProps} />
      </ChakraProvider>
    </StrictMode>
  );
}