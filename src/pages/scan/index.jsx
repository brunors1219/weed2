import React, { useState, useCallback } from 'react';
import { QrReader } from 'react-qr-reader';
import WelcomeGuest from '../../components/WelcomeGuest';
import { Box, Center, Text, Button } from "@chakra-ui/react";

export default function ReadQr(props) {
  const [data, setData] = useState(null);
  const [reading, setReading] = useState(true);

  const ReadQrCode = useCallback((value) => {
    if (reading) {
      setData(JSON.parse(value));
      setReading(false);  
    }
  }, []);

  const StartRead = useCallback(() => {
    setData(null);
    setReading(true);  
  }, []);

  return (
    <>
      <WelcomeGuest guest={data} back={StartRead}/>
      
      <QrReader
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
      />
    </>
  );
};