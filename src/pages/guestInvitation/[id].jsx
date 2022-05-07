import { useEffect, useState, useCallback } from 'react';
import { useRouter } from 'next/router'; 
import { Center, Box, Image, Flex, Badge, Text } from "@chakra-ui/react";
import { MdStar } from "react-icons/md";
import { GiGreekTemple } from 'react-icons/gi'
import styled from '@emotion/styled';

const Caixa = styled(Flex)`
  background-image: url(/images/a.jpg);
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: center;
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
        <Box 
          background="white" 
          w="lg" 
          h="7rem" 
          borderWidth="1px" 
          opacity="0.6" 
          ml="20px" 
          mb="20px" 
          borderRadius="lg"
          boxShadow='dark-lg' rounded='md' 
        >
          <Text mt={2} fontSize="3xl" fontWeight="semibold" lineHeight="short" textAlign="center">
            Olá {name}, precisamos muito da sua confirmação!
          </Text>
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
        </Box>
    </Caixa>      
  );
};


export default GuestInvite;