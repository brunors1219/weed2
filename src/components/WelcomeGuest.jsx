import { useCallback, useState } from 'react';
import { Box, Center, Text, Button } from "@chakra-ui/react";
import styled from '@emotion/styled';

const Title = styled(Text)`
    white-space: nowrap;
    /* overflow: hidden; */
    text-overflow: ellipsis;
`;

export default function WelcomeGuest({ guest, back }) {

  const [theGest, setTheGest] = useState(guest);

  const setPresent = useCallback(async (guest_id, escort_id) => {

    const queryParams = new URLSearchParams({
      guest_id      : guest_id,
      escort_id     : escort_id,
    });

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/present?${queryParams}`);
       
    const data = await response.text();
    setTheGest(JSON.parse(data));
    console.log(data);
  }, []);

  if (!theGest) {
    return null;
  }

  return (
    <Center>
      <Box m="2" bgColor={"#64a283"} h={"100vh"}>
          <Center
            m={10}
            color={"white"}
            fontSize={"xxx-large"}>
            Sejam todos muito bem vindos
          </Center>

          {theGest.escorts
            .filter((escort)=>{ return escort.confirmed; })
            .map((escort)=>{
              return (
                <Center w={"90%"}>
                  <Title m={2} 
                    p={2}
                    color={"white"}
                    fontSize={"xx-large"}
                    fontWeight="semibold" >
                    {escort.name}
                  </Title>
                  <Button
                    display={!escort.present ? "block" : "none"}
                    onClick={() => setPresent(guest._id, escort._id)}>
                    Confirmar presença
                  </Button>
                  <Title m={2} 
                    p={2}
                    color={"yellow"}
                    fontSize={"xx-large"}
                    fontWeight="semibold" 
                    display={!escort.present ? "none" : "block"}>
                    (Já Entrou!!!)
                  </Title>
  
                </Center>
                )
            })
          }

          <Center
            padding={"50px"}
            >            
            <Button 
              w={"90%"}
              onClick={() => back()}>
              Voltar
            </Button>
          </Center>
      </Box>
    </Center>
  );
}