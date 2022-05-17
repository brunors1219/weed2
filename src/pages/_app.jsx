import { ChakraProvider } from '@chakra-ui/react';
import GlobalStyle from '../styles/global';
import "@fontsource/great-vibes";

export default function Website({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <GlobalStyle />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}