import React, { useEffect, useState }  from 'react';
import GuestCard from '../../components/Guest';
import { Box, Flex, Center, Input, Text } from "@chakra-ui/react";

function listguests() {
  const [ guests , setGuests ] = useState([]);
  const [ query, setQuery] = useState('');
  const [ qtdInvite, setQtdInvite] = useState();
  const [ totalPeople, setTotalPeople] = useState();
  const [ inviteDelivered, setInviteDelivered] = useState();
  const [ invitePending, setInvitePending] = useState();
  const [ confirmedPeople, setConfirmedPeople] = useState();
  const [ recusedPeople, setRecusedPeople] = useState();
  const [ pendingPeople, setPendingPeople] = useState();

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/guests`)
      .then(response => response.json())
      .then(data => {
        setGuests(data);
      });
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/resume`)
      .then(response => response.json())
      .then(data => {
        setQtdInvite(data.qtdInvite);
        setTotalPeople(data.totalPeople);
        setInviteDelivered(data.inviteDelivered);
        setInvitePending(data.invitePending);
        setConfirmedPeople(data.confirmedPeople);
        setRecusedPeople(data.recusedPeople);
        setPendingPeople(data.pendingPeople);
      });
  }, []);

  useEffect(() => {

    if (!query) return 
   
   const parameters = new URLSearchParams({
      query : query});

    fetch(`${process.env.NEXT_PUBLIC_API_URL}/guests?${parameters}`)
      .then(response => response.json())
      .then(data => {
        setGuests(data);
      });

  }, [query]);

  const handleParam = setValue => e => setValue(e.target.value)

  return (
    <>
      <Center>
        <Input
          type='text'
          name='q'
          value={query}
          onChange={handleParam(setQuery)}
          placeholder='Digite o nome do Convidado'
          aria-label='Search'        
          width={"80%"}
          bgColor={"#FBB6CE"}
          color={"black"}
          m={5}
        />
      </Center>
      <Center>
        <Box textAlign={"center"}            
            ml={10}
            mr={10}>
          <Text fontSize={"large"}>Qtd.Convite</Text>
          <Text fontSize={"xx-large"}>{qtdInvite}</Text>
        </Box>
        <Box textAlign={"center"}          
          ml={10}
          mr={10}>
          <Text fontSize={"large"}>Total Pesoas</Text>
          <Text fontSize={"xx-large"}>{totalPeople}</Text>
        </Box>
        <Box border={"silver"}>
          <Center >Convites</Center>
            <Center>
              <Box textAlign={"center"}                
                ml={10}
                mr={10}>
                <Text fontSize={"large"}>Entregues</Text>
                <Text fontSize={"xx-large"}>{inviteDelivered}</Text>
              </Box>
              <Box textAlign={"center"}                
                ml={10}
                mr={10}>
                <Text fontSize={"large"}>Pendentes</Text>
                <Text fontSize={"xx-large"}>
                  {invitePending} {(invitePending/qtdInvite*100).toFixed(2)}%
                </Text>
              </Box>            
          </Center>
        </Box>
        <Box border={"silver"}>
          <Center>Pessoas</Center>
          <Center>
            <Box textAlign={"center"}              
              ml={10}
              mr={10}>
              <Text fontSize={"large"}>Confirmadas</Text>
              <Text fontSize={"xx-large"}>{confirmedPeople}</Text>
            </Box>
            <Box textAlign={"center"}              
              ml={10}
              mr={10}>
              <Text fontSize={"large"}>Recusaram</Text>
              <Text fontSize={"xx-large"}>{recusedPeople}</Text>
            </Box>
            <Box textAlign={"center"}              
              ml={10}
              mr={10}>
              <Text fontSize={"large"}>Pendente</Text>
              <Text fontSize={"xx-large"}>{pendingPeople}</Text>
            </Box>
          </Center>
        </Box>
          
      </Center>
      <Center>
        <Flex flexWrap={'wrap'}>
          {guests.map((guest)=> {
            return (
              <GuestCard key={guest._id} guest={guest} />
            );
          })}
        </Flex>
      </Center>
    </>

  );

} 

export default listguests;
