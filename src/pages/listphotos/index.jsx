import React from "react";
import styled from '@emotion/styled';
import { Box, Image, Flex, Button, Center } from '@chakra-ui/react';
export const Painel = styled(Box)`
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
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/photo`)
    .then(r =>  r.json())
    .then(data => {
      setPhotos(data);    
      console.log(photos);
    });    
  }  

  const deletePhoto = React.useCallback(async (photo) => {

    const queryParams = new URLSearchParams({
      _id  : photo._id,
    });

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/photo?${queryParams}`,
      {method: 'DELETE'});
    
      window.location.reload();
    
  }, []);

  React.useEffect(()=>{
    update()
  },[]);

  return (
      <Painel>
        <Flex flexWrap={"wrap"}>
          {Array.isArray(photos) ? photos.map((photo)=>{
            console.log(photo.url);
            return <div>
                <Image 
                  width={"200px"} 
                  height={"200px"}
                  margin={"10px"}
                  src={photo.url}></Image>
                <Center>
                  <Button onClick={() => deletePhoto(photo)}>Excluir</Button>
                </Center>
                
              </div>
          }): null}
        </Flex>
      </Painel>
  );
};

export default ListPhotos;
