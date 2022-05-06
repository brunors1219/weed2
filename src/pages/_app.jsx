import { ChakraProvider } from '@chakra-ui/react';

export default function Website({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}