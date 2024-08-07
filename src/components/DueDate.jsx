import { useEffect,  useState } from 'react';
import { Heading, Box, Center, Text, Button,
  useColorModeValue, FormControl} from '@chakra-ui/react';
import styled from '@emotion/styled';
import { SunIcon } from '@chakra-ui/icons'
import { FaChurch, FaRoute } from 'react-icons/fa/index.js';

const Fundo = styled(Center)`
  position:absolute;
  width: 100vw;
  height: 100vh;
  z-index:9999;
`;
const Caixa = styled(Center)`
  margin:auto;
`;
export default function DueDate({Visivel}) {
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
            <SunIcon />
            <br />
            Recepção
          </Heading>

          <Heading textAlign={'center'} fontSize={'2xl'} fontFamily={'body'} color={'#5f5694 '}>
            Seu convite expirou!
          </Heading>
          <Text fontWeight={600} color={'gray.500'} mb={4}>
            Infelizmente os noivos já fizeram seu planejamento.
          </Text>
          <Text fontWeight={600} color={'gray.500'} mb={4}>
            Se ainda tiver interesse de ir na Recepção é preciso que entre em contato com eles.
          </Text>

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
