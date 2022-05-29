import React, { useState, useCallback, useEffect } from 'react';
import WelcomeGuest from '../../components/WelcomeGuest';
import { Box, Center, Text, Button } from "@chakra-ui/react";
import QrCodeRead from './../../components/QrCodeRead';
import { QrReader } from 'react-qr-reader';

export default function ReadQr(props) {

  const [data, setData] = useState(null);
  const [startQrCode, setstartQrCode] = useState(true);

  const ReadQrCode = useCallback((value) => {
    const _data = JSON.parse(value);
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/guests/${_data.guest_id}`)
    .then(response => response.json())
    .then(data => {
      setData(data);
    });
    StopRead();
  }, []);

  const StartRead = useCallback(() => {
    setstartQrCode(true);
  }, []);

  const StopRead = useCallback(() => {
    setstartQrCode(false);
  }, []);

  const back = useCallback(() => {
    window.location.reload();
  }, []);

  return (
    <>
      {/* <Button onClick={() =>StartRead()}>Realizar leitura</Button>
      <Button onClick={()=>StopRead()}>Parar leitura</Button>*/}
      {data != null && <WelcomeGuest guest={data} back={()=>back()}/>} 
      {startQrCode &&
          <QrReader
          containerStyle={{height: "100vh"}}
          cameraStyle={[{height: "100vh"}]}        
          ref={node => { scanner = node;}}
          reactivateTimeout={3000}
          key="environment"
          constraints={{ facingMode: 'environment' }}
          onResult={(result, error) => {

            if (!!result) {  
              ReadQrCode(result?.text);          
            } 

            if (!!error) {
              console.info(error);
            }
          }}
          style={{ width: '100%' }}
        />}
    </>
  );
};