import { ChakraProvider } from '@chakra-ui/react';
import GlobalStyle from '../styles/global';
import "@fontsource/great-vibes";
import { StrictMode } from "react";

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