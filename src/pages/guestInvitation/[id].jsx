import { useEffect, useState, useCallback } from 'react';
import { useRouter } from 'next/router'; 
import { Center, Box, Image, Flex, Text, Button } from "@chakra-ui/react";
import { MdStar } from "react-icons/md";
import { GiGreekTemple } from 'react-icons/gi'
import styled from '@emotion/styled';

const Caixa = styled(Flex)`
  background-image: url(/images/a.jpg);
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: center;
`;

const Aviso = styled(Box)`
  box-shadow : 8px 13px 7px black;
`;

const GuestInvite = () => {
  const { query } = useRouter();
  const { id } = query;
  const [name , setName] = useState('');
  const [status , setStatus] = useState('Pendente');
  const [escorts , setEscorts] = useState([]);

  useEffect(() => {
    if (id) {
      fetch(`${process.env.NEXT_PUBLIC_API_URL}/guests/${id}`)
        .then(response => response.json())
        .then(data => {
          setName(data.name);
          setStatus(data.confirmed);
          setEscorts(data.escorts);
          console.log(name);
        });
    }    
  }, [id]);

  const setConfirmedStatus = useCallback((confirmed, escortId) => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/guests/${id}`, {
      method: 'PATCH',
      body: JSON.stringify({
        confirmed,
        escortId,
      }),
    })
    .then(response => response.json())
    .then(data => {
      setStatus(data.confirmed);

      if (escortId) {
        setEscorts(data.escorts);
      }
    });
  }, [id]);
  
  return (
    <Caixa h="100vh" flexDirection="column" justify="flex-end">
        <Aviso 
          background="white" 
          w="50%" 
          borderWidth="1px" 
          opacity="0.8" 
          m="10px 10px auto auto"
          borderRadius="lg"
        >
          <Text mt="{2}" fontSize="15px" fontWeight="semibold" lineHeight="short" textAlign="center">
            Olá <b>{name}</b>, precisamos muito da sua confirmação!
          </Text>
          <Flex m="5px" flexWrap={'wrap'} flexDirection={'row'}>
            <Button w="20%" color="White" fontSize="8px" backgroundColor="MediumSlateBlue" m="2px" whiteSpace={'normal'}>
              Confirmar presença
            </Button>
            <Button w="20%" color="Black" fontSize="8px" backgroundColor="DarkOrange" m="2px" whiteSpace={'normal'}>
              Listas de presentes
            </Button>
            <Button w="30%" color="Black" fontSize="8px" backgroundColor="Red" m="2px" whiteSpace={'normal'}>
              Não poderei comparecer
            </Button>
          </Flex>
          {status && (
            <ul>
              {escorts.map(escort => (
                <li>
                  <span>Id: {escort._id}</span>
                  <br />
                  <span>Nome do acompanhante: {escort.name}</span>
                </li>
              ))}
            </ul>
          )}
        </Aviso>
    </Caixa>      
  );
};


export default GuestInvite;