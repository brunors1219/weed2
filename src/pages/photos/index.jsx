import React from "react";
import styled from '@emotion/styled';
import { Box, Center, Text } from '@chakra-ui/react';
import { Image } from '@chakra-ui/react';

export const Painel = styled(Box)`
  background-color: blue;
  background-image: url(/images/backPhotos.jpg);
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: center;
  width: 100vw;
  height: 100vh;
`;
const ListPhotos = () => {

  const [photos,setPhotos] = React.useState({});

  function update(){
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/photo`,{method: 'GET'})
    .then(r =>  r.json())
    .then(data => {
      setPhotos(data);    
    });    
  }  

  React.useEffect(()=>{
    setInterval(()=>update(), 5000);
  },[]);

  return (
      <Painel>
        <Center>
          <Text fontSize={"xxx-large"}
            color={"white"}
            fontStyle={700}
            textShadow={"0.1em 0.1em 0.2em black"}>
            Curtam as recordações de nosso evento
          </Text>
        </Center>
        <Center>
          <img src={Array.isArray(photos) 
            ? photos[Math.floor((Math.random() * photos.length))].url
            : null} />
        </Center>    
        <Center>
          <Text fontSize={"x-large"}
            color={"white"}
            fontStyle={700}>
            Tirem todas as fotos possíveis, vamos registrar esse momento especial...
          </Text>
        </Center>
      </Painel>
  );
};

export default ListPhotos;
