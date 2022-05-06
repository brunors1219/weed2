import React from 'react';
import { Box, Image, Flex, Badge, Text } from "@chakra-ui/react";
import { MdStar } from "react-icons/md";
import { GiGreekTemple } from 'react-icons/gi'
import styled from '@emotion/styled';

const Caixa = styled(Flex)`
  background-image: url(/images/a.jpg);
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center;
`;

function Home() {
  return (
    <Caixa h="100vh" flexDirection="column" justify="flex-end">
      <Box background="white" p="5" w="full" h="12rem" borderWidth="1px" opacity="0.6">
        <Text mt={2} fontSize="3xl" fontWeight="semibold" lineHeight="short">
          Super casamento Margo e Anselmo
        </Text>
        <Flex mt={2} align="center">
          <Box as={MdStar} color="orange.400" />
          <Text ml={1} fontSize="sm">
            <b>18/08/2022</b> 
          </Text>
        </Flex>
        <Flex mt={2} align="center">
          <Box as={GiGreekTemple} color="orange.400" />
          <Text ml={1} fontSize="sm">
            <b>Celebração as 21:00 - Igreja de São Francisco - Sete Lagoas - Bairro JK</b> 
          </Text>
        </Flex>
        <Flex mt={2} align="center">
          <Box as={GiGreekTemple} color="orange.400" />
          <Text ml={1} fontSize="sm">
            <b>Recepção a partir das 22:00 - Sítio Primavera</b> 
          </Text>
        </Flex>
      </Box>
    </Caixa>
  );

} 

export default Home;
