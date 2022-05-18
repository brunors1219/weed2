import React from 'react';
import { Box, Image, Flex, Badge, Text } from "@chakra-ui/react";
import { MdStar } from "react-icons/md";
import { GiGreekTemple } from 'react-icons/gi'
import styled from '@emotion/styled';
import Head from 'next/head';

const Caixa = styled(Flex)`
  background-image: url(/images/capLink.jpg);
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center;
  margin: 2%;
  align-items: center;
  justify-content: center;
  border-radius: 20%;
`;

function Home() {
  return (
    <Box bc="#505EA1" w="100vw" h="100vh" >
      <Head>
      {/* <!-- Primary Meta Tags --> */}
        <title>Casamento Margo e Anselmo</title>
        <meta name="title" content="Nosso convite de casamento" />
        <meta name="description" content="Muito importante a confirmação de sua presença." />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website"/> 
        <meta property="og:url" content="https://wedd-ichihara7l.vercel.app/guestInvitationv3/62766327ab987346e0f88fe3"/>
        <meta property="og:title" content="Nosso convite de casamento"/>
        <meta property="og:description" content="Muito importante a confirmação de sua presença."/>
        <meta property="og:image" content=""/>

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image"/>
        <meta property="twitter:url" content="https://wedd-ichihara7l.vercel.app/guestInvitation/62766327ab987346e0f88fe3"/>
        <meta property="twitter:title" content="Nosso convite de casamento"/>
        <meta property="twitter:description" content="Muito importante a confirmação de sua presença."/>
        <meta property="twitter:image" content=""/>        
      </Head>

      <Caixa h="80vh" flexDirection="column" justify="flex-end">
        <Box background="white" p="5" w="full" h="12rem" borderWidth="1px" opacity="0.6">
          <Text mt={2} fontSize="3xl" fontWeight="semibold" lineHeight="short">
            Super casamento Margo e Anselmo
          </Text>
          <Flex mt={2} align="center">
            <Box as={MdStar} color="orange.400" />
            <Text ml={1} fontSize="sm">
              <b>13/08/2022</b> 
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
    </Box>
  );

} 

export default Home;
