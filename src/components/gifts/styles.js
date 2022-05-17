import styled from '@emotion/styled';
import { Box, Center } from '@chakra-ui/react';

export const ButtonClose = styled(Box)`
  position: fixed;
  top: 7px;
  right: 7px;
`;

export const Fundo = styled(Center)`
  background-color: #9583B6;
  position:absolute;  
  width: 97vw;
  height: 97vh;
  z-index:9999;
`;
