import React from "react";
import { Box, Center, Text, Img } from '@chakra-ui/react';
import { SiTinyletter } from 'react-icons/si';
import { GiPresent } from 'react-icons/gi';
import { GrValidate } from 'react-icons/gr';
import { BsPersonCheckFill } from 'react-icons/bs';
import { IoLogoWhatsapp } from 'react-icons/io';

const Body = (props) => {
  const [whidth, setWhidth] = React.useState(false);
  const [scroll, setScroll] = React.useState(false);
  const [number, setNumber] = React.useState(1);
  const [imageSlide, setimageSlide] = React.useState(`/img/event-${number}.jpg`);
  const imageTop = '/img/illustration2.png';

  React.useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 10);
    });

    setWhidth(window.innerWidth <= 1200);

    setInterval(() => {
      nextPhoto()
    },5000)
  }, []);

  const nextPhoto = () => {
    number++;
    if (number>9) number = 1;
    setimageSlide('/Img/event-'+number+'.jpg');
  };

  const textWhatsApp = '?text=Eu%20quero%20saber%20mais%20sobre%20como%20usar%20GTA%20Fotos';

  return (
    <div>
      <a href={(whidth?"https://api.whatsapp.com/send/?phone=":"https://web.whatsapp.com/send/?phone=") + "+5531997799888" + textWhatsApp}
        target="_blank">
        <Box position={"fixed"}
          top={"30%"}
          right={0}
          zIndex={999}
          backgroundColor={"white"}
          opacity={"80%"}
          borderRadius={"10px"}
          p={5}
          >
          <Center color={"green"}
            fontSize={"80px"}>
            <IoLogoWhatsapp />
          </Center>
          <Text color={"black"}>Fale conosco</Text>
        </Box>     
      </a> 
      <Box        
        mt={20}
        w={"100%"}
        h={"300px"}>
        <Img src={imageSlide} 
          h={whidth?"300px":"600px"}
          w={"100%"}
          />
      </Box>      
      <Center mt={whidth?null:"-10px"}>
        <Box padding={whidth?4:10}>
          <Center 
            fontSize={whidth?"xx-large":"xxx-large"}
            textAlign={"center"}
            fontWeight={900}
            color={"var(--background-collor)"}
            textShadow={"2px 2px 2px white"}
            >
            Registre todos os momentos de seu evento.
            {whidth
              ? <Box
                  style={{"width":"50%"}}>
                  <Img src={imageTop} height={"100%"} width={"100%"}/>
                </Box>      
              : null            }
          </Center>
          <Center 
            fontSize={whidth?"xx-small":"large"}
            textAlign={"center"}
            padding={whidth?"0px!important":5}
            fontWeight={1200}
            textShadow={"2px 2px 2px white"}
            >
            <p>Nossa plataforma vai <b>reunir</b> todas os emoções de seu evento</p>
          </Center>
          <Center
            fontWeight={900}
            fontSize={whidth?"large":"xx-large"}
            textAlign={"center"}
            color={"blue"}
            padding={3}
            textShadow={"2px 2px 2px white"}>
            Seus convidados tiram as fotos e nós nos encarregamos de junta-las em um único lugar para você!
          </Center>
          <Center 
            fontSize={whidth?"xx-large":"xx-large"}
            color={"var(--background-collor)"}
            fontWeight={900}>
            Nossos produtos
          </Center>

          <Center display={"flex"} 
            flexWrap={"wrap"}
            flexDirection={"row"}             
            >
            <SiTinyletter /><Text pr={1}>Convites</Text>
            <BsPersonCheckFill /><Text pr={1}>Confirmação de presença</Text>
            <GrValidate /><Text pr={1}>Controle de entrada</Text>
            <GiPresent /><Text pr={1}>Lista de presentes</Text>
          </Center>

        </Box>
        {!whidth
          ?<Box
            style={{"width":"50%"}}>
            <Img src={imageTop} height={"100%"} width={"100%"}/>
            </Box>      
          : null        }
      </Center>
    </div>
  );

};

export default Body;
