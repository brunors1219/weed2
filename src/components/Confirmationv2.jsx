import { useCallback} from 'react';
import { Box, Center, Text, Stack, Button, 
  Badge, useColorModeValue, FormControl} from '@chakra-ui/react';
import styled from '@emotion/styled';
import ConfirmationGuest from './ConfirmationGuest';
import { GoThumbsup, GoThumbsdown } from 'react-icons/go/index.js';

const Fundo = styled(Center)`
  position:absolute;
  width: 100vw;
  height: 100vh;
  z-index:9999;
`;
const Caixa = styled(Center)`
  margin:auto;
`;

export default function Confirmationv2({id, Guest, Escorts, Visivel, funcaoFechar, confirmed}) {

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
          <Text fontWeight={600} color={'black'} mb={4}>
            Sua presença é muito importante!
          </Text>

          <Text
            textAlign={'center'}
            color={useColorModeValue('gray.900', 'gray.400')}
            px={3}>
            Por favor, <b>confirme</b> a presença apenas daqueles que irão à <b>recepção</b>!
            Essa confirmação é importante para que possamos melhor nos organizar e recebê-los!
            <br />
            <br />
            Escolha um dos botões abaixo:
            <Center>              
              <GoThumbsup /> <Text m={2}>Eu Vou</Text>
              <GoThumbsdown /> <Text m={2}>Eu não Vou</Text>
            </Center>
          </Text>

          <Stack align={'center'} mt={6} >
            {Escorts.map((Escort)=>{
              return (
                <ConfirmationGuest 
                  GuestId={id} 
                  GuestName={Escort.name} 
                  Escort={Escort}
                  confirmed={Escort.confirmed}/>
              )              
            })}
          </Stack>
          <Text>
            <b>Ao final será emitido um Qr-Code que precisará apresentar no dia do evento.</b>
          </Text>

          <br />
          <FormControl id="name" flexDirection={'column'} p={1}>
            <Button
              variant="solid"
              bg="#C8A2C8"
              color="white"
              _hover={{}}
              w="100%"
              mt={5}
              onClick={() => funcaoFechar() }>
              Enviar
            </Button>
          </FormControl>
        </Box>
      </Caixa>
    </Fundo>
  );
}
