import styled from "@emotion/styled";
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
export const ImgFlores = styled(Box)`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 999;
  width:100%;
  img{
    width:100%;
  }

`;
export const Caixa = styled(Flex)`
  background-image: url(/images/inviteBack1.jpg);
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: center;
  text-align: center;
  align-items: center;
  color: #C8A2C8;
  font-family: "Great Vibes";
  .title {
    font-size: xx-large;
    width: 80%;
  }
  .titleName {
    font-size: xxx-large;
    padding: 5px;
    color: #9583B6;
    font-weight: 400;
    font-family: "Mistrully";
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
    .locate {font-size: xx-large; }
  }
`;

export const Circlo = styled(Flex)`
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

export const Btn = styled(Button)`
  display:block;
  height: 85px;
  width: 120px;
  border-radius: 50%;
  background-color: #C8A2C8;
  color: white;
  text-align: center;
  white-space: normal;
  font-size: larger;
  font-family: "Water Brush";
  /* "Great Vibes"; */
  margin: 1px;

`;

export const Btn1 = styled(Button)`
  display:block;
  height: 85px;
  width: 120px;
  border-radius: 50%;
  background-color: #505EA1 ;
  color: white;
  text-align: center;
  white-space: normal;
  font-size: larger;
  font-family: "Water Brush";
  /* "Great Vibes"; */
  margin: 1px;
`;
export const Aviso = styled(Box)`
  box-shadow : 8px 13px 7px black;
`;
