import React from "react";
import styled from '@emotion/styled';
import { Box, Center, Text } from '@chakra-ui/react';

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
  const [classImage,setClassImage] = React.useState("ball");
  const [position,setPosition] = React.useState(0);

  const update = async () => {
    try{
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/photo?data=${new Date}`)
      const data = await response.json();
      photos = data;    
      console.log(data);
      position = 0;
    }
    finally{
     
    }


  };

  const updatePhoto = () =>{
    console.log('position: ', position);
    
    if (photos.length>0) {
      // Math.round(Math.random()*photos.length)
      setPhoto(photos[position]);
      position++;
    }
    if (position >= photos.length){
      update();
    }
  };

  React.useEffect(()=>{
    console.log("Inicio");
    update();

    const updatePhotoInterval = setInterval(()=>updatePhoto(), 5000); 
    
    return () => {
      clearInterval(updatePhotoInterval);
    }
  },[]);

  return (
      <Painel>
        <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>        
        <div 
          style={{
              "display":"flex",
              "width":"100vw",
              "heigth" : "100vh",
              "position" :"fixed", 
              "z-index" : "9999",
              "justify-content": "space-between"
            }}>
            <lottie-player src="https://assets3.lottiefiles.com/packages/lf20_b6cz19m8.json"  
              background="transparent"  
              speed="0.9" 
              loop controls autoplay
              style={{"width":"20%",}}></lottie-player>        
            <lottie-player src="https://assets3.lottiefiles.com/packages/lf20_b6cz19m8.json"  
              background="transparent"  
              speed="0.6" 
              loop controls autoplay
              style={{"width":"20%",}}></lottie-player>        
          </div>
        <Center>
          <Text style={{
              "font-size": "xxx-large",
              "color" : "white",
              "font-weight" : "900",
              "text-shadow" : "2px 2px 5px red"}}>
            Curtam as recordações de nosso evento
          </Text>
        </Center>
        <Center>
          <Text style={{
              "font-weight" : "900",              
              "font-size": "xxx-large",
            }}
            color={"green"}
            fontStyle={900}
            textShadow={"2px 2px 5px red"}>
            {photo ? photo.guest_name ? photo.guest_name : "Aguardando fotos1..." : "Aguardando fotos..."}
          </Text>
        </Center>
        <Center>
          {photo 
            ? <img style={{"width":"80vw",
                      "height":"65vh"}} 
                  src={photo.url} 
                  className={classImage}/> 
            : <Text fontSize={"100px"}
                textAlign={"center"}
                color={"white"}
                fontStyle={900}
                textShadow={"2px 2px 5px red"}>
                "Vamos lá... capturarem o máximo de recordações!!!"
              </Text>
          }
        </Center>    
        <Center>
          <Text style={{
              "font-bold":"500",
              "font-size": "xx-large",
              "color" : "white",
              "font-weight" : "900",
              "text-shadow" : "2px 2px 5px red"}}>
            Tirem quantas fotos quiser, vamos registrar esse momento especial...
          </Text>
        </Center>
        <Center>
          <Text style={{
              "font-bold":"500",
              "font-size": "xx-large",
              "color" : "white",
              "font-weight" : "600",
              "text-shadow" : "2px 2px 5px red",
              "text-align" : "center",
              "width": "30%"}}>
            No seu convite tem uma camera, abra no seu celular a comece a capturar os momentos.
          </Text>
          <Text style={{
              "font-bold":"500",
              "font-size": "xx-large",
              "color" : "white",
              "font-weight" : "600",
              "text-shadow" : "2px 2px 5px red",
              "text-align" : "center",
              "width": "60%"}}>
            Você pode compartilhar o seu convite com as pessoas da sua família. 
            <br />
            Para que eles também possam tirar fotos.
          </Text>
        </Center>

      </Painel>
  );
};

export default ListPhotos;
