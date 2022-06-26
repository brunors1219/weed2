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
  const [ invitePendingPeople, setInvitePendingPeople] = useState();
  const [ invitePendingPeopleA, setInvitePendingPeopleA] = useState();
  const [ invitePendingPeopleC, setInvitePendingPeopleC] = useState();
  const [ invitePendingPeopleN, setInvitePendingPeopleN] = useState();
  const [ invitePendingPeopleX, setInvitePendingPeopleX] = useState();

  const [ confirmedPeopleA, setConfirmedPeopleA] = useState();
  const [ confirmedPeopleC, setConfirmedPeopleC] = useState();
  const [ confirmedPeopleN, setConfirmedPeopleN] = useState();
  const [ confirmedPeopleX, setConfirmedPeopleX] = useState();

  const [ confirmedPeopleAnselmoA, setConfirmedPeopleAnselmoA] = useState();
  const [ confirmedPeopleAnselmoC, setConfirmedPeopleAnselmoC] = useState();
  const [ confirmedPeopleAnselmoN, setConfirmedPeopleAnselmoN] = useState();
  const [ confirmedPeopleAnselmoX, setConfirmedPeopleAnselmoX] = useState();

  const [ confirmedPeopleMargoA, setConfirmedPeopleMargoA] = useState();
  const [ confirmedPeopleMargoC, setConfirmedPeopleMargoC] = useState();
  const [ confirmedPeopleMargoN, setConfirmedPeopleMargoN] = useState();
  const [ confirmedPeopleMargoX, setConfirmedPeopleMargoX] = useState();

  const [ recusedPeople, setRecusedPeople] = useState();
  const [ pendingPeopleA, setPendingPeopleA] = useState();
  const [ pendingPeopleC, setPendingPeopleC] = useState();
  const [ pendingPeopleN, setPendingPeopleN] = useState();
  const [ pendingPeopleX, setPendingPeopleX] = useState();

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
        setInvitePendingPeople(data.invitePendingPeople);
        setInvitePendingPeopleA(data.invitePendingPeopleA);
        setInvitePendingPeopleC(data.invitePendingPeopleC);
        setInvitePendingPeopleN(data.invitePendingPeopleN);
        setInvitePendingPeopleX(data.invitePendingPeopleX);

        setConfirmedPeopleA(data.confirmedPeopleA);
        setConfirmedPeopleC(data.confirmedPeopleC);
        setConfirmedPeopleN(data.confirmedPeopleN);
        setConfirmedPeopleX(data.confirmedPeopleX);

        setConfirmedPeopleAnselmoA(data.confirmedPeopleAnselmoA);
        setConfirmedPeopleAnselmoC(data.confirmedPeopleAnselmoC);
        setConfirmedPeopleAnselmoN(data.confirmedPeopleAnselmoN);
        setConfirmedPeopleAnselmoX(data.confirmedPeopleAnselmoX);

        setConfirmedPeopleMargoA(data.confirmedPeopleMargoA);
        setConfirmedPeopleMargoC(data.confirmedPeopleMargoC);
        setConfirmedPeopleMargoN(data.confirmedPeopleMargoN);
        setConfirmedPeopleMargoX(data.confirmedPeopleMargoX);

        setRecusedPeople(data.recusedPeople);
        setPendingPeopleA(data.pendingPeopleA);
        setPendingPeopleC(data.pendingPeopleC);
        setPendingPeopleN(data.pendingPeopleN);
        setPendingPeopleX(data.pendingPeopleX);

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
                <Box display={"flex"} flexDirection={"row"}>
                  <Text fontSize={"x-large"}>{invitePending}</Text>
                  <Text fontSize={"large"}>{(invitePending/qtdInvite*100).toFixed(2)}%</Text>
                </Box>
                <Text>Pessoas:{invitePendingPeople}</Text>
                <Box fontSize={"small"}>
                <Text>Adulto: <b>{invitePendingPeopleA}</b></Text>
                <Text>7 a 12 anos: <b>{invitePendingPeopleC}</b></Text>
                <Text>Menor de 7: <b>{invitePendingPeopleN}</b></Text>
                {invitePendingPeopleX>0?<Text>Sem idade: <b>{invitePendingPeopleX}</b></Text>:null}
              </Box>
              </Box>            
          </Center>
        </Box>
        <Box border={"silver"}>
          <Center>Pessoas</Center>
          <Box textAlign={"center"}          
            ml={10}
            mr={10}>
            <Text fontSize={"xx-large"}>{totalPeople}</Text>
          </Box>

          <Center>
            <Box textAlign={"center"}              
              ml={10}
              mr={10}>
              <Text fontSize={"large"}>Confirmadas</Text>
              <Text fontSize={"xx-large"}>{confirmedPeopleA+confirmedPeopleC+confirmedPeopleN+confirmedPeopleX}</Text>
              <Box fontSize={"small"}>
                <Text>Adulto: <b>{confirmedPeopleA}</b></Text>
                <Text>7 a 12 anos: <b>{confirmedPeopleC}</b></Text>
                <Text>Pagamos: <b>{confirmedPeopleA+confirmedPeopleC+confirmedPeopleX}</b></Text>
                <Text>Menor de 7: <b>{confirmedPeopleN}</b></Text>
                {confirmedPeopleX>0 ? <Text>Sem idade: <b>{confirmedPeopleX}</b></Text> : null}
              </Box>
            </Box>
            <Box textAlign={"center"}              
              ml={10}
              mr={10}>
              <Text fontSize={"large"}>Conf.Margo</Text>
              <Text fontSize={"xx-large"}>{confirmedPeopleMargoA+confirmedPeopleMargoC+confirmedPeopleMargoN+confirmedPeopleMargoX}</Text>
              <Box fontSize={"small"}>
                <Text>Adulto: <b>{confirmedPeopleMargoA}</b></Text>
                <Text>7 a 12 anos: <b>{confirmedPeopleMargoC}</b></Text>
                <Text>Pagamos: <b>{confirmedPeopleMargoA+confirmedPeopleMargoC+confirmedPeopleMargoX}</b></Text>
                <Text>Menor de 7: <b>{confirmedPeopleMargoN}</b></Text>
                {confirmedPeopleMargoX>0 ? <Text>Sem idade: <b>{confirmedPeopleMargoX}</b></Text> : null}
              </Box>
            </Box>
            <Box textAlign={"center"}              
              ml={10}
              mr={10}>
              <Text fontSize={"large"}>Conf.Anselmo</Text>
              <Text fontSize={"xx-large"}>{confirmedPeopleAnselmoA+confirmedPeopleAnselmoC+confirmedPeopleAnselmoN+confirmedPeopleAnselmoX}</Text>
              <Box fontSize={"small"}>
                <Text>Adulto: <b>{confirmedPeopleAnselmoA}</b></Text>
                <Text>7 a 12 anos: <b>{confirmedPeopleAnselmoC}</b></Text>
                <Text>Pagamos: <b>{confirmedPeopleAnselmoA+confirmedPeopleAnselmoC+confirmedPeopleAnselmoX}</b></Text>
                <Text>Menor de 7: <b>{confirmedPeopleAnselmoN}</b></Text>
                {confirmedPeopleAnselmoX>0 ? <Text>Sem idade: <b>{confirmedPeopleAnselmoX}</b></Text> : null}
              </Box>
            </Box>

            <Box textAlign={"center"}              
              ml={10}
              mr={10}>
              <Text fontSize={"large"}>Pendente</Text>
              <Text fontSize={"xx-large"}>{pendingPeopleA+pendingPeopleC+pendingPeopleN+pendingPeopleX}</Text>
              <Box fontSize={"small"}>
                <Text>Adulto: <b>{pendingPeopleA}</b></Text>
                <Text>7 a 12 anos: <b>{pendingPeopleC}</b></Text>
                <Text>Pagamos: <b>{pendingPeopleA+pendingPeopleC+pendingPeopleX}</b></Text>
                <Text>Menor de 7: <b>{pendingPeopleN}</b></Text>
                {pendingPeopleX>0 ? <Text>Sem idade: <b>{pendingPeopleX}</b></Text> : null}
              </Box>
            </Box>
            <Box textAlign={"center"}              
              ml={10}
              mr={10}>
              <Text fontSize={"large"}>Recusaram</Text>
              <Text fontSize={"xx-large"}>{recusedPeople}</Text>
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
