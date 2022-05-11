import { useEffect, useState, useCallback } from 'react';
import { useRouter } from 'next/router'; 
import { Center, Box, Image, Flex, Text, Button } from "@chakra-ui/react";
import { MdStar } from "react-icons/md";
import { GiGreekTemple } from 'react-icons/gi'
import styled from '@emotion/styled';

const Caixa = styled(Flex)`
  background-image: url(/images/inviteBack.jpg);
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: center;
  text-align: center;
  align-items: center;
  color: white;
  font-family: "Great Vibes";
  .title {font-size: x-large; }
  .titleName {font-size: xxx-large;
    padding: 10px; }
  .locate {font-size: xx-large; }  
  .time {font-weight: 900;}  
`;

const Circlo = styled(Flex)`
  background-color: #aaa;
  border-radius: 50%;
  width: 200px;
  height: 200px;
  overflow: hidden;
  position: relative;
  margin-top: -10vh;
  img {
    width: 300px;
    height: 250px;
    margin-top: -52px;
    margin-left: 0px; 
  }    
`;

const Btn = styled(Button)`
  display:block;
  height: 100px;
  width: 100px;
  border-radius: 50%;
  border: 1px solid;
  background-color: white;
  color: black;
  font-weight:600;
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
    <Caixa h="100vh" flexDirection="column" justify="center" >
      <Circlo>
        <img src="/images/MargoeEu.jpg" alt="" />
      </Circlo>
      <p class="title">Você está convidado para o casamento de</p>
      <img src="" alt="" />
      <p class="titleName">Margare E Anselmo</p>
      <img src="" alt="" />
      <p class="locate">13 de agosto de 2022</p>
      <p class="locate time">às 21:00h</p>
      <Flex flexDirection="row">
        <Btn>Confirme sua presença</Btn>
        <Btn>Local da cerimônia</Btn>
        <Btn>Local da recepção</Btn>
        <Btn>Lista de presentes</Btn>
      </Flex>
      <h3>"Da parte do Senhos se fez isto, maravilhoso é aos nossos olhos"</h3>
      <h4>Salmos 118:23</h4>
    </Caixa>      
  );
};


export default GuestInvite;