import { Heading, Box, Center, Button,
  useColorModeValue, FormControl} from '@chakra-ui/react';
import styled from '@emotion/styled';
import { useQRCode } from 'next-qrcode';

const Fundo = styled(Center)`
  position:absolute;
  width: 100vw;
  height: 100vh;
  z-index:9999;
`;
const Caixa = styled(Center)`
  margin:auto;
`;
export default function QrCode({Visivel, funcaoFechar}) {
  const { Canvas } = useQRCode();

  if (!Visivel) {
    return null;
  }

  return (
    <Fundo id="cardConfirmation">
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
          <h1>É indispensável a apresentação na recepção!</h1>
          </Heading>
          <br />
          <h3>Através deste código será possível identificar você e seus acompanhantes!</h3>
          <br />
          <Canvas
                text={"Casamento maravilhoso Margo e Anselmo"}
                options={{
                  type: 'image/jpeg',
                  quality: 0.3,
                  level: 'M',
                  margin: 3,
                  scale: 4,
                  width: 280,
                  color: {
                    dark: '#010599FF',
                    light: '#FFBF60FF',
                  },
                }}
              />
          <br />
          <br />

          <FormControl id="name" flexDirection={'column'} p={1}>
            <Button
              variant="solid"
              bg="#505EA1"
              color="white"
              _hover={{}}
              w="100%"
              onClick={funcaoFechar}>
              Voltar
            </Button>
          </FormControl>
        </Box>
      </Caixa>
    </Fundo>
  );
}
