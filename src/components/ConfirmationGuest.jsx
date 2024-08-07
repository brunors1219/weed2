import { useCallback, useState } from 'react';
import { Box, Button, Badge } from '@chakra-ui/react';
import { GoThumbsup, GoThumbsdown } from 'react-icons/go/index.js';
import styled from '@emotion/styled';

export const BtnVai = styled(Button)`
  margin : 1px;
  :hover {
    background-color: #009000;
  }
`;

export const BtnNaoVai = styled(Button)`
  margin : 1px;
  :hover {
    background-color: #ffc1db;
  }
`;

export default function ConfirmationGuest({GuestId, GuestName, Escort, confirmed}) {

  const [colorButtonVai, setcolorButtonVai] = useState(confirmed ? '#009000' : '#edf2f7');
  const [colorButtonNaoVai, setcolorButtonNaoVai] = useState(confirmed || confirmed == null ? '#edf2f7' : '#ffc1db');
  
  const setConfirmedStatus = useCallback((confirmed) => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/guests/${GuestId}`, {
      method: 'PATCH',
      body: JSON.stringify({
        confirmed,
        Escort
      }),
    })
    .then(response => {
        response.json();
        if (confirmed){
          setcolorButtonVai("#009000");
          setcolorButtonNaoVai("#edf2f7");
        }else{
          setcolorButtonVai("#edf2f7");
          setcolorButtonNaoVai("#ffc1db");
        }
          
    });
  }, [GuestId]);

  return(
    <Box>
      <Badge
        m={1}
        px={2}
        py={1}
        bg={'#5f5694'}
        color={'white'}
        fontWeight={'400'}>
        #{GuestName}
      </Badge>
      <BtnVai 
        bg={colorButtonVai} 
        onClick={()=> setConfirmedStatus(true)}>
        <GoThumbsup />
      </BtnVai>
      <BtnNaoVai 
        bg={colorButtonNaoVai} 
        onClick={()=> setConfirmedStatus(false)}>
        <GoThumbsdown />
      </BtnNaoVai>
    </Box> 
  );
}