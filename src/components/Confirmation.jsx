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
    console.log(mostrar);
  }, [Visivel]);

  const setConfirmedStatus = useCallback((confirmed) => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/guests/${id}`, {
      method: 'PATCH',
      body: JSON.stringify({
        confirmed
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
          <Heading fontSize={'2xl'} fontFamily={'body'}>
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

          <Stack align={'center'} justify={'center'} direction={'row'} mt={6}>
            {Escorts.map((Escort)=>{
              return (
                <Badge
                  px={2}
                  py={1}
                  bg={useColorModeValue('gray.50', 'gray.800')}
                  fontWeight={'400'}>
                  {Escort.name}
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
              bg="#0D74FF"
              color="white"
              _hover={{}}
              w="100%"
              onClick={() => setConfirmedStatus(true)}>
              Registrar
            </Button>
            <Button
              variant="solid"
              bg="red"
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