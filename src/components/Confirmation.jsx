import { useEffect, useCallback, useState } from 'react';
import { Heading, Avatar, Box, Center, Text, Stack, Button, Link, 
  Badge, useColorModeValue, FormControl, FormLabel, Collapse,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper} from '@chakra-ui/react';
import styled from '@emotion/styled';

const Fundo = styled(Center)`
  position:absolute;
  width: 100vw;
  height: 100vh;
  z-index:999;
`;
const Caixa = styled(Center)`
  margin:auto;
`;
export default function Confirmation({id, Guest, Escorts, Visivel}) {
  const [mostrar, setMostrar] = useState(Visivel);

  useEffect(() => {
    setMostrar(Visivel);
  }, [Visivel]);

  const setConfirmedStatus = useCallback((confirmed, quantidade) => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/guests/${id}`, {
      method: 'PATCH',
      body: JSON.stringify({
        confirmed,
        quantidade
      }),
    })
    .then(response => response.json())
    .then(data => {
      setMostrar("none");
    });
  }, [id]);

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
            {Guest}
          </Heading>
          <Text fontWeight={600} color={'gray.500'} mb={4}>
            Sua presença é muito importante!
          </Text>

          <Text
            textAlign={'center'}
            color={useColorModeValue('gray.700', 'gray.400')}
            px={3}>
            Precisamos que confirme sua 
            <b> presença</b> e de seus <b>acompanhantes </b>
            para que possamos melhor organizar a recepção!
          </Text>

          <Stack align={'center'} justify={'center'} direction={'row'} mt={6} flexWrap={'wrap'}>
            <Badge
              m={1}
              px={2}
              py={1}
              bg={'#5f5694'}
              color={'white'}
              fontWeight={'400'}>
              #{Guest}
            </Badge>  
            {Escorts.map((Escort)=>{
              return (
                <Badge
                  m={1}
                  px={2}
                  py={1}
                  bg={'#5f5694'}
                  color={'white'}
                  fontWeight={'400'}>
                  #{Escort.name}
                </Badge>  
              );
            })}
          </Stack>

          <br />
          <FormControl id="quantidadeConfirmada">
            <FormLabel textAlign={'center'}>Por favor, confirme a <b>quantidade</b> de pessoas que vão na recepção</FormLabel>
            <NumberInput defaultValue={(Escorts.length+1)} min={0} max={Escorts.length+1} w="30%" m="auto">
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </FormControl>

          <br />
          <FormControl id="name" flexDirection={'column'} p={1}>
            <Button
              variant="solid"
              bg="#505EA1"
              color="white"
              _hover={{}}
              w="100%"
              onClick={() => setConfirmedStatus(true, document.querySelector('#quantidadeConfirmada').value)}>
              Registrar
            </Button>
            <Button
              variant="solid"
              bg="#C8A2C8"
              color="white"
              _hover={{}}
              w="100%"
              mt={5}
              onClick={() => setMostrar("none") }>
              Não comparacerei
            </Button>
          </FormControl>
        </Box>
      </Caixa>
    </Fundo>
  );
}