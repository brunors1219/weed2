import { useEffect, useState, useCallback } from 'react';
import { useRouter } from 'next/router';
import { Center, Box, Flex, Button } from "@chakra-ui/react";
import styled from '@emotion/styled';
import Confirmation from "/src/components/Confirmation.jsx";
import Locate from "/src/components/Locate.jsx";
import QrCode from '/src/components/QrCode';
import Gifts from './../gifts/index';

const Fundo = styled(Center)`
  position:absolute;
  width: 100vw;
  height: 100vh;
  z-index:999;
`;
const CaixaMsg = styled(Center)`
  margin:auto;
`;
const Caixa = styled(Flex)`
  background-image: url(/images/inviteBack1.jpg);
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: center;
  text-align: center;
  align-items: center;
  color: #C8A2C8;
  font-family: "Great Vibes";
  .title {
    font-size: x-large;
    width: 70%;
  }
  .titleName {font-size: xxx-large;
    padding: 5px;
    color: #9583B6;
    font-weight: 700;
    }
  .locate {
    font-size: x-large;
  }
  .time {
    font-weight: 900;
    font-family: "Water Brush"
  }
  .frase {
    font-size: smaller;
    width: 50%;
    font-family: "Water Brush";
    margin-top: 2vh;
    margin-left: -40%;
    text-align: left;
    font-weight: 900;
    color: #9583B6;
  }
  .fraseAutor{
    margin-left: -20%;
  }

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
  h1 {
    font-size: xx-large;
  }
  img {
    width: 100%;
    height: 100%;
  }
  @media(min-height: 800px) {
    margin-left: 30vw;
  }

`;

const ImgQrCode = styled(Flex)`
  background-image: url(/images/inviteBack1.jpg);
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: center;
  text-align: center;
  align-items: center;
  color: black;
  font-size: large;
  overflow: hidden;
  position: absolute;
  z-index: 9999;
  width: 100%;
  height: 100%;
  img {
    margin-left: 10%;
    width: 80%;
    height: 40%;
  }
  button {
    width: 50%;
  }
  @media(min-height: 800px) {
    margin-left: 30vw;
  }

`;

const Btn = styled(Button)`
  display:block;
  height: 50px;
  width: 85px;
  border-radius: 50%;
  background-color: #C8A2C8;
  color: white;
  text-align: center;
  white-space: normal;
  font-size: xx-small;
  font-family: "Water Brush";
  /* "Great Vibes"; */
  margin: 1px;

  @media(min-height: 800px) {
    height: 80px;
    width: 25%;
    font-size: smaller;
  }
`;

const Btn1 = styled(Button)`
  display:block;
  height: 50px;
  width: 85px;
  border-radius: 50%;
  background-color: #505EA1 ;
  color: white;
  text-align: center;
  white-space: normal;
  font-size: xx-small;
  font-family: "Water Brush";
  /* "Great Vibes"; */
  margin: 1px;

  @media(min-height: 800px) {
    height: 80px;
    width: 25%;
    font-size: smaller;
  }
`;
const Aviso = styled(Box)`
  box-shadow : 8px 13px 7px black;
`;

const GuestInvite = () => {
  const { query } = useRouter();
  const { id } = query;
  const [name , setName] = useState('');
  const [confirmado , setconfirmado] = useState('');
  const [escorts , setEscorts] = useState([]);
  const [mostrarConfirmacao, setMostrarConfirmacao] = useState(false);
  const [msgLocal, setmsgLocal] = useState('none');
  const [mostrarQrCode, setMostrarQrCode] = useState(false);
  const [mostrarList, setMostrarList] = useState(false);

  useEffect(() => {
    if (id) {
      fetch(`${process.env.NEXT_PUBLIC_API_URL}/guests/${id}`)
        .then(response => response.json())
        .then(data => {
          setName(data.name);
          setconfirmado(data.confirmed);
          setEscorts(data.escorts);
        });
    }
  }, [id]);

  const exibirConfirmacao = useCallback(() => {
    setMostrarConfirmacao(true);
  }, []);

  const fecharConfirmacao = useCallback(() => {
    setMostrarConfirmacao(false);
    window.location.reload();
  }, []);

  const exibirQrCode = useCallback(() => {
    setMostrarQrCode(true);
  }, []);

  const fecharQrCode = useCallback(() => {
    setMostrarQrCode(false);
  }, []);

  const exibirList = useCallback(() => {
    setMostrarList(true);
  }, []);

  const fecharList = useCallback(() => {
    setMostrarList(false);
  }, []);

  return (
    <Box>
      <Confirmation id={id} Guest={name} Escorts={escorts} Visivel={mostrarConfirmacao} funcaoFechar={fecharConfirmacao} />

      <Locate Visivel={msgLocal}>
      </Locate>

      <QrCode Visivel={mostrarQrCode} funcaoFechar={fecharQrCode} />

      <Gifts Visivel={mostrarList} funcaoFechar={fecharList} />

      <Caixa h="100vh" flexDirection="column" justify="center" >
        <Circlo>
          <img src="/images/MargoeEu.jpg" alt="" />
        </Circlo>
        <p class="title">{name}, gostaríamos de convida-lo para o casamento de</p>
        <img src="" alt="" />
        <p class="titleName">Margarete E Anselmo</p>
        <img src="" alt="" />
        <p class="locate">13 de agosto de 2022</p>
        <p class="locate time">às 21:00h</p>
        <Flex flexDirection="row">
          <Btn onClick={()=>setmsgLocal("block")}>Local</Btn>
          <Btn1 onClick={()=>confirmado ? exibirQrCode() : exibirConfirmacao()}>
            {(confirmado)? "QrCode" : "Confirme sua presença"}
          </Btn1>
          <Btn onClick={()=>exibirList()}>Lista de presentes</Btn>
        </Flex>
        <h3 class="frase">"Em seu coração o homem planeja seu caminho, mas o Senhor determina seus passos."</h3>
        <h4 class="fraseAutor">Provérbios 16:9</h4>
      </Caixa>

    </Box>
  );
};


export default GuestInvite;
