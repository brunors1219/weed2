import { useEffect,  useState } from 'react';
import { Heading, Box, Center, Text, Button,
  useColorModeValue, FormControl} from '@chakra-ui/react';
import styled from '@emotion/styled';
import { SunIcon } from '@chakra-ui/icons'
import { FaChurch, FaRoute } from 'react-icons/fa/index.js';
import { BiHotel } from 'react-icons/bi/index.js';


const Fundo = styled(Center)`
  position:absolute;
  width: 100vw;
  height: 100vh;
  z-index:9999;
`;
const Caixa = styled(Center)`
  margin:auto;
`;
export default function Locate({Visivel}) {
  const [mostrar, setMostrar] = useState(Visivel);

  useEffect(() => {
    setMostrar(Visivel);
  }, [Visivel]);

  return (
    <Fundo id="cardConfirmation" display={mostrar}>
      <Caixa py={6}>
        <Box
          maxW={'320px'}
          w={'full'}
          bg={useColorModeValue('white', 'gray.900')}
          boxShadow={'2xl'}
          rounded={'lg'}
          p={6}
          textAlign={'center'}>

          <Heading textAlign={'center'} fontSize={'2xl'} fontFamily={'body'} color={'#5f5694 '}>
            <Center>
              <FaChurch />
            </Center>            
            Igreja
          </Heading>
          <Text fontWeight={700} mb={4}>
            Igreja de São Francisco
          </Text>
          <Text fontWeight={600} color={'gray.500'} mb={4}>
            R. Itaipú, 53 - B. São Francisco de Assis, Sete Lagoas - MG
          </Text>
          <a 
            target="_blank"             
            href="https://www.google.com.br/maps/place/Igreja+S%C3%A3o+Francisco+de+Assis/@-19.4299745,-44.2496829,17z/data=!3m1!4b1!4m5!3m4!1s0xa645586f98be91:0x7e87d2481e6b4c82!8m2!3d-19.4300211!4d-44.2474724?hl=pt-BR&authuser=0">
            <Center>
              <FaRoute 
                color={"#64a283"}
                fontSize={"xxx-large"}/>
            </Center>
          </a>
          <br />
          <br />

          <Heading fontSize={'2xl'} fontFamily={'body'} color={'#5f5694 '}>
            <SunIcon />
            <br />
            Recepção
          </Heading>
          <Text fontWeight={700} mb={4}>
            Sítio Primavera
          </Text>
          <Text fontWeight={600} color={'gray.500'} mb={4}>
            Avenida Arquimedes, 145 - JK, Sete Lagoas - MG
          </Text>
          <a 
            target="_blank"             
            href="https://www.google.com/maps/place/Av.+Arquimedes,+145+-+Jk,+Sete+Lagoas+-+MG,+35702-240/@-19.4190029,-44.2466727,17z/data=!4m13!1m7!3m6!1s0xa64566a11e38fd:0xa9647136db3c149b!2sAv.+Arquimedes,+145+-+Jk,+Sete+Lagoas+-+MG,+35702-240!3b1!8m2!3d-19.419003!4d-44.242188!3m4!1s0xa64566a11e38fd:0xa9647136db3c149b!8m2!3d-19.419003!4d-44.242188">
            <Center>
              <FaRoute 
                color={"#64a283"}
                fontSize={"xxx-large"}/>
            </Center>
          </a>
          <br />
          <br />

          <Heading fontSize={'2xl'} fontFamily={'body'} color={'#5f5694 '}>
            <Center>
              <BiHotel />
            </Center>            
            Hoteis
            <Text fontSize={"small"}>
              Clique no nome do hotel para acessar o site
            </Text>
          </Heading>
          <br />
          <a 
            target="_blank"             
            href="http://www.rivierapalacehotel.com.br/">
            <Center>
              <Text fontWeight={700}>
                Riviera Palace Hotel
              </Text>
            </Center>
          </a>
          <a 
            target="_blank"             
            href="tel:+553137710808">
            <Text fontWeight={600} color={'gray.500'}>
              (31) 3771-0808
              </Text>
          </a>
          <br />
          <a 
            target="_blank"             
            href="http://www.realhotel.com.br/">
            <Center>
              <Text fontWeight={700}>
                Real Hotel
              </Text>
            </Center>
          </a>
          <a 
            target="_blank"             
            href="tel:+553137733301">
            <Text fontWeight={600} color={'gray.500'}>
              (31) 3773-3301
              </Text>
          </a>
          <br />
          <a 
            target="_blank"             
            href="http://www.hotelvilaserrana.com.br/">
            <Center>
              <Text fontWeight={700}>
                Vila Serrana
              </Text>
            </Center>
          </a>
          <a 
            target="_blank"             
            href="tel:+553137764422">
            <Text fontWeight={600} color={'gray.500'}>
              (31) 3776-4422
              </Text>
          </a>
          <br />

          

          <FormControl id="name" flexDirection={'column'} p={1}>
            <Button
              variant="solid"
              bg="#505EA1"
              color="white"
              _hover={{}}
              w="100%"
              onClick={() => setMostrar("none")}>
              Voltar
            </Button>
          </FormControl>
        </Box>
      </Caixa>
    </Fundo>
  );
}
