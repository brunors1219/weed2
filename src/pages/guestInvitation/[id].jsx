import { useEffect, useState, useCallback } from 'react';
import { useRouter } from 'next/router'; 
import { Center, Box, Image, Flex, Text, Button } from "@chakra-ui/react";
import { MdStar } from "react-icons/md";
import { GiGreekTemple } from 'react-icons/gi'
import styled from '@emotion/styled';
import Confirmation from "/src/components/Confirmation.jsx";

const Caixa = styled(Flex)`
  background-image: url(/images/inviteBack1.jpg);
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: center;
  text-align: center;
  align-items: center;
  color: #C8A2C8;
  font-family: "Great Vibes";
  .title {font-size: large; }
  .titleName {font-size: xxx-large;
    padding: 5px; 
    color: #9583B6;
    font-weight: 500;
    }   
  .locate {font-size: x-large; }  
  .time {font-weight: 900;}  
  .frase {width: 50%;    
        margin-left: -100px;}
  .fraseAutor{margin-left: -118px;}

  @media(min-height: 800px) {
    .title {font-size: xx-large; }
    .locate {font-size: xx-large; }  
  }
`;

const Circlo = styled(Flex)`
  background-color: #505EA1;
  border-radius: 50%;
  width: 30vh;
  height: 30vh;
  overflow: hidden;
  position: relative;
  margin-left: 30px;
  img {
    width: 100%;
    height: 100%;
  }    
  @media(min-height: 800px) {
    margin-left: 30vw;
  }

`;

const Btn = styled(Button)`
  display:block;
  height: 50px;
  width: 60px;
  border-radius: 50%;
  background-color: #505EA1;
  color: white;
  text-align: center;
  white-space: normal;
  font-size: xx-small;
  font-family: "Great Vibes";
  margin: 2px;

  @media(min-height: 800px) {
    height: 80px;
    width: 80px;
    margin: 40px 10px 40px 10px;
    font-size: medium;
  }
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
    <Box>
      <Confirmation>        
      </Confirmation>
      <Caixa h="100vh" flexDirection="column" justify="center" >
        <Circlo>
          <img src="/images/MargoeEu.jpg" alt="" />
        </Circlo>
        <p class="title">{name}, convido para o casamento de</p>
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
        <h3 class="frase">Da parte do Senhos se fez isto, maravilhoso é aos nossos olhos"</h3>
        <h4 class="fraseAutor">Salmos 118:23</h4>
      </Caixa>      

    </Box>
  );
};


export default GuestInvite;