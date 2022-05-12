import { useEffect,  useState } from 'react';
import { Heading, Box, Center, Text, Button,
  useColorModeValue, FormControl} from '@chakra-ui/react';
import styled from '@emotion/styled';
import { BellIcon, SunIcon } from '@chakra-ui/icons'


const Fundo = styled(Center)`
  position:absolute;
  width: 100vw;
  height: 100vh;
  z-index:999;
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
          <Heading fontSize={'2xl'} fontFamily={'body'} color={'#5f5694 '}>
            <BellIcon />            
            <br />
            Igreja
          </Heading>
          <Text fontWeight={600} color={'gray.500'} mb={4}>
            R. Itaipú, 53 - São Francisco de Assis, Sete Lagoas - MG
          </Text>
          <br />
          <br />
          <br />
          <Heading fontSize={'2xl'} fontFamily={'body'} color={'#5f5694 '}>
            <SunIcon />
            <br />
            Recepção
          </Heading>
          <Text fontWeight={600} color={'gray.500'} mb={4}>
            Avenida Arquimedes, 145 - JK, Sete Lagoas - MG
          </Text>
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