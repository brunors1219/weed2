import React from "react";
import styled from '@emotion/styled';
import { Box, Center, Text } from '@chakra-ui/react';


const Body = (props) => {

  return (
    <>
      <Center style={{"height":"500px"}}>
        <div padding={10}>
          <Center 
            fontSize={"xx-large"}
            textAlign={"center"}
            >
            Registre todos os momentos de seu evento.
          </Center>
          <Center 
            fontSize={"large"}
            textAlign={"center"}
            padding={5}>
            <p>Nossa plataforma vai <b>reunir</b> todas os emoções de seu evento</p>
          </Center>
          <Center
            fontWeight={700}
            fontSize={"xx-large"}
            textAlign={"center"}
            color={"blue"}
            padding={10}>
            Seus convidados tiram as fotos e nós nos encarregamos de junta-las em um único lugar para você!
          </Center>

        </div>
        <div
          style={{"width":"50%"}}>
          <img src="/img/illustration2.png" height={"100%"} width={"100%"}/>
        </div>      
      </Center>
    </>
  );

};

export default Body;
