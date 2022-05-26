import { useCallback} from 'react';
import { Box, Center, Text, Stack, Button, 
  Badge, useColorModeValue, FormControl} from '@chakra-ui/react';
import styled from '@emotion/styled';
import ConfirmationGuest from './ConfirmationGuest';

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
            Por favor, <b>confirme</b> a presença apenas daqueles que vão na <b>recepção</b>!
            Essa confimarção é importante para que possamos melhor organizar e recebe-los!
            <br />
            Ao final será emitido um Qr-Code que precisará apresentar no dia do evento.
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
              Voltar
            </Button>
          </FormControl>
        </Box>
      </Caixa>
    </Fundo>
  );
}
