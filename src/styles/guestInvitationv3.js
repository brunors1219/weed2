import styled from '@emotion/styled';
import { Center, Box, Flex, Button } from "@chakra-ui/react";

export const Fundo = styled(Center)`
  position:absolute;
  width: 100vw;
  height: 100vh;
  z-index:999;
`;
export const CaixaMsg = styled(Center)`
  margin:auto;
`;
export const CaixaTextoContive = styled(Box)`
  margin: 10px;
  width: 50vw;
  font-size: x-large;
  color: #9583B6;
  align-self: flex-end;
  @media(min-height: 800px) {
    width: 12vw;
  }

`;
export const lateral = styled(Box)`
  width: 40%;
  background-color: #9583B6;
  display: none;

  @media(min-height: 800px) {
    display: block;
  }
`;
export const CaixaNoivos = styled(Box)`
  font-size: xx-large;
  color: #9583B6;
  font-weight: 500;
  font-family: "Mistrully";
`;
export const Caixa = styled(Flex)`
  background-image: url(/images/inviteBackSemFolha.jpg);
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: center;
  text-align: center;
  align-items: center;
  color: #C8A2C8;
  font-family: "Great Vibes";

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
    width : "30%";
    .title {font-size: xx-large; }
    .locate {font-size: xx-large; }
  }
`;

export const Circlo = styled(Flex)`
  background-color: #505EA1;
  border-radius: 50%;
  width: 25vh;
  height: 25vh;
  overflow: hidden;
`;

export const ImgQrCode = styled(Flex)`
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

export const BtnNovo = styled(Button)`
  display:block;
  height: 80px;
  width: 120px;
  border-radius: 50%;
  background-color: #C8A2C8;
  color: white;
  text-align: center;
  white-space: normal;
  font-size: larger;
  font-family: "Water Brush";
  margin: 5px;
  box-shadow: 3px 3px orange, 3px 2px orange, 0px 1px orange;
`;

export const BtnNovo1 = styled(Button)`
  display:block;
  display:block;
  height: 85px;
  width: 120px;
  border-radius: 50%;
  background-color: #505EA1 ;
  color: white;
  text-align: center;
  white-space: normal;
  margin: 1px;
  font-size: larger;
  font-family: 'Water Brush';  
  box-shadow: 3px 3px orange, 3px 2px orange, 0px 1px orange;
`;

export const Aviso1 = styled(Box)`
  box-shadow : 8px 13px 7px black;
`;
