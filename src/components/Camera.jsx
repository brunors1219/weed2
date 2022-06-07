import React from "react";
import Webcam from "react-webcam";
import styled from '@emotion/styled';
import { Center, Box, IconButton } from '@chakra-ui/react';
import { FcRotateCamera } from 'react-icons/fc';
import { CloseIcon } from '@chakra-ui/icons';
import Camera, { FACING_MODES } from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';

export const BoxButton = styled(Center)`
  bottom: 7px;  
  position: fixed;
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
    return null;
  }
  
  const webcamRef = React.useRef(null);
  const [idealFacingMode, setIdealFacingMode] = React.useState(null);
  const [isMaxResolution, setIsMaxResolution] = React.useState(false);

  function changeCamera(){
    if (idealFacingMode == FACING_MODES.ENVIRONMENT){
      setIdealFacingMode(FACING_MODES.USER);
      setIsMaxResolution(false);
    }else{
      setIdealFacingMode(FACING_MODES.ENVIRONMENT);
      setIsMaxResolution(true);
    }
  };

  React.useEffect(() => {
    console.log('Montei!');

    return () => {
      console.log('Desmontei!');
    };
  }, []);

  const capture = React.useCallback(
    async (dataUri) => {
      console.log(dataUri);

      const formData = new FormData();           
      formData.append('file', dataUri);
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
      .then(() => {
        alert('Saved success. See your photo in pary!');
      });

    },
    [webcamRef]
  );

  return (
    <Box position="fixed" width="full" height="full"  backgroundColor="#000" top={0} left={0} zIndex={199}>
      <Camera 
        idealFacingMode = {idealFacingMode}
        isMaxResolution = {isMaxResolution}
        isFullscreen={true}
        onTakePhoto = { (dataUri) => { capture(dataUri); } }
      />
      <BoxButton>
        <FcRotateCamera size={50} className="Box" onClick={()=>changeCamera()}/>
      </BoxButton>

     <ButtonClose>
        <IconButton
          colorScheme='teal'
          aria-label='Call Segun'
          size='lg'
          icon={<CloseIcon />}
          onClick={() => funcaoFechar() }          
        />    
      </ButtonClose>
    </Box>
  );
};