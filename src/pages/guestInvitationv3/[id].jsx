import { useEffect, useState, useCallback } from 'react';
import { useRouter } from 'next/router';
import { Box, Flex, Text } from "@chakra-ui/react";
import Confirmationv2 from "/src/components/Confirmationv2.jsx";
import Locate from "/src/components/Locate.jsx";
import QrCode from '/src/components/QrCode';
import Gifts from '/src/components/gifts';
import * as Style from '../../styles/guestInvitationv3';
import Camera from '/src/components/Camera';
import { FcCamera } from 'react-icons/fc';
import { BsCameraFill } from 'react-icons/bs';
import DueDate from './../../components/DueDate';

const GuestInvite = () => {

  const { query } = useRouter();
  
  const [showButtomCamera, setshowButtomCamera] = useState(false);

  const { id } = query;
  const [name , setName] = useState('');
  const [dueDate , setdueDate] = useState();
  const [guest , setguest] = useState({});
  const [confirmado , setconfirmado] = useState('');
  const [escorts , setEscorts] = useState([]);
  const [mostrarConfirmacao, setMostrarConfirmacao] = useState(false);
  const [msgLocal, setmsgLocal] = useState('none');
  const [msgDueDate, setmsgDueDate] = useState('none');
  const [mostrarQrCode, setMostrarQrCode] = useState(false);
  const [mostrarList, setMostrarList] = useState(false);
  const [mostrarCamera, setMostrarCamera] = useState(false);
  
  useEffect(() => {
    if (id){
      fetch(`${process.env.NEXT_PUBLIC_API_URL}/setup`)
        .then(response => response.json())
        .then(data => {         
          setshowButtomCamera(data.showCamera);            
        });

      fetch(`${process.env.NEXT_PUBLIC_API_URL}/guests/${id}`)
        .then(response => response.json())
        .then(data => {
          setguest(data);
          setName(data.name);
          setconfirmado(data.confirmed);
          setEscorts(data.escorts);
          setdueDate(data.dueDate);
        });
      }
}, [id]);

  const exibirConfirmacao = useCallback(() => {
    setMostrarConfirmacao(true);
    setMostrarQrCode(false);
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
  const exibirCamera = useCallback(() => {
    setMostrarCamera(true);
  }, []);

  const fecharCamera = useCallback(() => {
    setMostrarCamera(false);
  }, []);

  return (
    <Box position="relative">      

      <Confirmationv2 
        id={id} 
        Guest={name} 
        Escorts={escorts} 
        Visivel={mostrarConfirmacao} 
        funcaoFechar={fecharConfirmacao}
        confirmed={confirmado} />

      <Locate Visivel={msgLocal} />
      <DueDate Visivel={msgDueDate} />

      <QrCode 
        Guest={guest}
        Visivel={mostrarQrCode} 
        funcaoFechar={fecharQrCode} 
        funcaoAbrirConfirmacao={exibirConfirmacao} 
      />

      <Gifts Visivel={mostrarList} funcaoFechar={fecharList} guest={id} guest_name={name}/>
      <Box display={"Flex"}>
        
        <Style.lateral />

        <Style.Caixa h="100vh" flexDirection="column">

          {mostrarCamera && <Camera Visivel={mostrarCamera} funcaoFechar={fecharCamera} Guest={guest}/>}

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
          <p className="locate"><b>13 de agosto de 2022</b></p>
          <p className="locate time">às 20:47h</p>
          <Flex flexDirection="row">
            <Style.BtnNovo onClick={()=>setmsgLocal("block")}>Local</Style.BtnNovo>
            {new Date(guest.dueDate) < new Date() && guest.dueDate & !confirmado
              ?
                <Style.BtnNovo1 onClick={()=>setmsgDueDate("block")}>
                  Confirme presença (Expir...)
                </Style.BtnNovo1>
              :
                <Style.BtnNovo1 onClick={()=>confirmado ? exibirQrCode() : exibirConfirmacao()}>
                  {(confirmado)? "QrCode" : "Confirme sua presença"}
                </Style.BtnNovo1>
            }
            <Style.BtnNovo onClick={()=>exibirList()}>Lista presentes</Style.BtnNovo>
          </Flex>
          <Flex  flexDirection={"row"}>
            <Text 
              margin={"5px"}
              className="frase">
              "Em seu coração o homem planeja seu caminho, mas o Senhor determina seus passos."
            </Text>
            {!showButtomCamera?null:
            <BsCameraFill
              fontSize={"xxx-large"}
              onClick={()=>exibirCamera()}
            />}
          </Flex>
          <h4 className="fraseAutor">Provérbios 16:9</h4>
          
        </Style.Caixa>

        <Style.lateral />

      </Box>



    </Box>
  );
};


export default GuestInvite;
