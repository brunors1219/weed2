import { useEffect, useState, useCallback } from 'react';
import { useRouter } from 'next/router';
import { Box, Flex } from "@chakra-ui/react";
import Confirmation from "/src/components/Confirmation.jsx";
import Locate from "/src/components/Locate.jsx";
import QrCode from '/src/components/QrCode';
import Gifts from '../../components/gifts';
import * as Style from './guestInvitation';

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

      <Style.Caixa h="100vh" flexDirection="column">
        <Style.CaixaTextoContive>
          <p>Olá {name}, ficaremos felizes e honrados com a presença de vocês em nosso casamento!</p>
        </Style.CaixaTextoContive>
        <Box>
          <Style.Circlo>
            <img src="/images/MargoeEu.jpg" alt="" />
          </Style.Circlo>
        </Box>
        <Style.CaixaNoivos>
          <p>
            <span>M</span>argarete 
            <span> e </span>
            <span>A</span>nselmo
          </p>
        </Style.CaixaNoivos>
        <img src="" alt="" />
        <img src="" alt="" />
        <p className="locate"><b>13 de agosto de 2022</b></p>
        <p className="locate time">às 21:00h</p>
        <Flex flexDirection="row">
          <Style.Btn onClick={()=>setmsgLocal("block")}>Local</Style.Btn>
          <Style.Btn1 onClick={()=>confirmado ? exibirQrCode() : exibirConfirmacao()}>
            {(confirmado)? "QrCode" : "Confirme sua presença"}
          </Style.Btn1>
          <Style.Btn onClick={()=>exibirList()}>Lista presentes</Style.Btn>
        </Flex>
        <h3 className="frase">"Em seu coração o homem planeja seu caminho, mas o Senhor determina seus passos."</h3>
        <h4 className="fraseAutor">Provérbios 16:9</h4>
      </Style.Caixa>

    </Box>
  );
};


export default GuestInvite;
