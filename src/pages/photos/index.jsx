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

  const [photos,setPhotos] = React.useState([]);
  const [photo,setPhoto] = React.useState({});


  const update = React.useCallback(async () => {
    console.log('update: ', photos);
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/photo`);
    const data = await response.json();

    setPhotos(data);    
  }  ,[]);

  const updatePhoto = React.useCallback(()=>{
    console.log('updatePhoto: ', photos);
    if (photos.length>0) {
      setPhoto(photos[Math.round(Math.random()*photos.length)]);
    }
  }, [photos]);

  React.useEffect(() => {
    update();
    const updateInterval = setInterval(()=> update(), 600000);

    return () => {
      clearInterval(updateInterval);
    }
  }, [update]);

  React.useEffect(()=>{
    console.log("Inicio");
    updatePhoto();
    
    const updatePhotoInterval = setInterval(()=>updatePhoto(), 10000); 
    
    return () => {
      clearInterval(updatePhotoInterval);
    }
  },[updatePhoto]);

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
          <Text fontSize={"xxx-large"}
            color={"white"}
            fontStyle={700}
            textShadow={"0.1em 0.1em 0.2em black"}>
            {!photo ? photo.guest_name ? photo.guest_name : null : null}
          </Text>
        </Center>
        <Center>
          {photo ? <img src={photo.url} /> : null}
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
