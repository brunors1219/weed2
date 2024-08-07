// import styled from '@emotion/styled';
// import { Box, Center } from '@chakra-ui/react';

// export const ButtonClose = styled(Box)`
//   position: fixed;
//   top: 7px;
//   right: 7px;
// `;

// export const Fundo = styled(Center)`
//   background-color: #64a283;
//   position:absolute;  
//   z-index:9999;
// `;

// src/components/gifts/styles.js
import { Box, Center, useStyleConfig } from '@chakra-ui/react';

// Componente ButtonClose usando Box do Chakra UI
export const ButtonClose = (props) => {
  const styles = useStyleConfig('ButtonClose');
  return (
    <Box
      __css={styles}
      position="fixed"
      top="7px"
      right="7px"
      {...props}
    />
  );
};

// Componente Fundo usando Center do Chakra UI
export const Fundo = (props) => {
  const styles = useStyleConfig('Fundo');
  return (
    <Center
      __css={styles}
      backgroundColor="#64a283"
      position="absolute"
      zIndex="9999"
      {...props}
    />
  );
};
