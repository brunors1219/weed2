import { ChakraProvider } from '@chakra-ui/react';
import "@fontsource/great-vibes";

export default function Website({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}