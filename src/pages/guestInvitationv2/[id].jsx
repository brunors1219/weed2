import { useEffect, useState, useCallback } from 'react';
import { useRouter } from 'next/router';
import { Box, Flex } from "@chakra-ui/react";
import Confirmation from "/src/components/Confirmation.jsx";
import Locate from "/src/components/Locate.jsx";
import QrCode from '/src/components/QrCode';
import Gifts from '/src/components/gifts';
import Style from '../../styles/guestInvitationv2';

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
    <Box position="relative">
      <Confirmation id={id} Guest={name} Escorts={escorts} Visivel={mostrarConfirmacao} funcaoFechar={fecharConfirmacao} />

      <Locate Visivel={msgLocal}>
      </Locate>

      <QrCode Visivel={mostrarQrCode} funcaoFechar={fecharQrCode} />

      <Gifts Visivel={mostrarList} funcaoFechar={fecharList} guest={id}/>

      <Style.Caixa h="100vh" flexDirection="column" justify="center" >
        <Style.ImgFlores>
          <img src="/images/Flores.png" alt="" />
        </Style.ImgFlores>        
        <Style.CaixaNoivos>
          <p><span>M</span>argarete </p>
          <p><span>e</span></p>
          <p><span>A</span>nselmo</p>
        </Style.CaixaNoivos>
        <Style.Circlo>
          <img src="/images/MargoeEu.jpg" alt="" />
        </Style.Circlo>
        <p class="title">Olá {name}, venha participar desse nosso dia inesquecível!</p>
        <img src="" alt="" />
        <img src="" alt="" />
        <p class="locate"><b>13 de agosto de 2022</b></p>
        <p class="locate time">às 21:00h</p>
        <Flex flexDirection="row" mt={2}>
          <Style.Btn onClick={()=>setmsgLocal("block")}>Local</Style.Btn>
          <Style.Btn1 onClick={()=>confirmado ? exibirQrCode() : exibirConfirmacao()}>
            {(confirmado)? "QrCode" : "Confirme sua presença"}
          </Style.Btn1>
          <Style.Btn onClick={()=>exibirList()}>Lista presentes</Style.Btn>
        </Flex>
        <h3 class="frase">"Em seu coração o homem planeja seu caminho, mas o Senhor determina seus passos."</h3>
        <h4 class="fraseAutor">Provérbios 16:9</h4>
      </Style.Caixa>

    </Box>
  );
};


export default GuestInvite;
