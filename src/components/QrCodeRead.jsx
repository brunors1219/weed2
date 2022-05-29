import { useState, useEffect } from 'react';
import { QrReader } from 'react-qr-reader';

export default function QrCodeRead({Visivel, functionStart, functionStop, functionReadQrCode}) {

  if (!Visivel) {
    return null;
  }

  return (
    <>
      <QrReader
        containerStyle={{height: "100vh"}}
        cameraStyle={[{height: "100vh"}]}
        showMarker={Visivel}
        key="environment"
        constraints={{ facingMode: 'environment' }}
        onResult={(result, error) => {

          if (!!result) {  
            alert(result?.text);
            functionReadQrCode(result?.text);          
          } 

          if (!!error) {
            console.info(error);
          }
        }}
        style={{ width: '100%' }}
      />


    </>
  );
}
