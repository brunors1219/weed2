import React from "react";
import Webcam from "react-webcam";
import styled from '@emotion/styled';
import { Center, Box, IconButton } from '@chakra-ui/react';
import { FcRotateCamera } from 'react-icons/fc';
import { CloseIcon } from '@chakra-ui/icons';

export const BoxButton = styled(Center)`
  bottom: 7px;  
  display: flex;  
  z-index: 9999;
  .Box{
    margin: 20px;
    font-size: "xxx-large";
  }
`;

export const BoxButton1 = styled(Box)`
  bottom: 7px;  
  display: flex;  
  z-index: 9999;
  .Box{
    margin: 20px;
    font-size: "xxx-large";
  }
`;
export const ButtonCapture = styled(Box)`
  bottom: 7px;  
  background-color: red;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  z-index: 9999;
  margin-top: -150px;
  border: 4px solid white;
  box-shadow: inset 0 0 0 2px #E0FFFF;
`;

export const ButtonClose = styled(Box)`
  position: fixed;
  top: 7px;
  right: 7px;
`;
export default function WebcamVideo({ Visivel, funcaoFechar }) {  

  if (!Visivel){
    return
  }

  const webcamRef = React.useRef(null);
  const [face, setface] = React.useState("user");

  const videoConstraints = {
    width: "100%",
    height: "100vh",
    facingMode: face
  };
  
  function changeCamera(){
    if (face =="user")
      setface("environment");
    else
    setface("user");
  };

  const capture = React.useCallback(
    async () => {
      const imageSrc = webcamRef.current.getScreenshot();

      const formData = new FormData();     
      formData.append('file', imageSrc);
      formData.append('upload_preset', 'my-wedd-photos');
  
      const data = await fetch('https://api.cloudinary.com/v1_1/die6t1h9a/image/upload', {
        method: 'POST',
        body: formData
      }).then(r => r.json());
      const url = data.secure_url;

      const gift = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/photo`, {
        method: 'POST',
        body: JSON.stringify({
          url
        }),
      })
      .then(response => response.json())
      .then(async () => {
        alert('Saved success. See your photo in pary!');
        const photos = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/photo`,{method: 'GET'})
          .then(r => r.json());
        console.log(photos);
      });

    },
    [webcamRef]
  );
  return (
    <>
      <Webcam
        audio={false}
        height={720}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width={1280}
        videoConstraints={videoConstraints}
      />
      <BoxButton>
        <ButtonCapture onClick={capture} />
      </BoxButton>
      <BoxButton1>
        <FcRotateCamera class="Box" onClick={()=>changeCamera()}/>
      </BoxButton1>
      <ButtonClose>
        <IconButton
          colorScheme='teal'
          aria-label='Call Segun'
          size='lg'
          icon={<CloseIcon />}
          onClick={() => funcaoFechar() }          
        />    
      </ButtonClose>
    </>
  );
};