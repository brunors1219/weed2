import React, { useEffect, useState }  from 'react';
import GuestCard from '../../components/Guest';
import { Box, Center, Input, Text, Collapse, Button } from "@chakra-ui/react";
import ReactHTMLTableToExcel from 'react-html-table-to-excel';

function listguests() {
  const [ guests , setGuests ] = useState([]);
  const [ query, setQuery] = useState('');
  const [ qtdInvite, setQtdInvite] = useState();
  const [ totalPeople, setTotalPeople] = useState();
  const [ inviteDelivered, setInviteDelivered] = useState();
  const [ invitePending, setInvitePending] = useState();
  const [ invitePendingPeople, setInvitePendingPeople] = useState();

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

  const [ presentPeopleA, setPresentPeopleA] = useState();
  const [ presentPeopleC, setPresentPeopleC] = useState();
  const [ presentPeopleN, setPresentPeopleN] = useState();
  const [ presentPeopleX, setPresentPeopleX] = useState();

  const [ presentPeopleAnselmoA, setPresentPeopleAnselmoA] = useState();
  const [ presentPeopleAnselmoC, setPresentPeopleAnselmoC] = useState();
  const [ presentPeopleAnselmoN, setPresentPeopleAnselmoN] = useState();
  const [ presentPeopleAnselmoX, setPresentPeopleAnselmoX] = useState();

  const [ presentPeopleMargoA, setPresentPeopleMargoA] = useState();
  const [ presentPeopleMargoC, setPresentPeopleMargoC] = useState();
  const [ presentPeopleMargoN, setPresentPeopleMargoN] = useState();
  const [ presentPeopleMargoX, setPresentPeopleMargoX] = useState();

  const [ recusedPeople, setRecusedPeople] = useState();

  const [ pendingPeopleA, setPendingPeopleA] = useState();
  const [ pendingPeopleC, setPendingPeopleC] = useState();
  const [ pendingPeopleN, setPendingPeopleN] = useState();
  const [ pendingPeopleX, setPendingPeopleX] = useState();

  const [ pendingPeopleAnselmoA, setPendingPeopleAnselmoA] = useState();
  const [ pendingPeopleAnselmoC, setPendingPeopleAnselmoC] = useState();
  const [ pendingPeopleAnselmoN, setPendingPeopleAnselmoN] = useState();
  const [ pendingPeopleAnselmoX, setPendingPeopleAnselmoX] = useState();

  const [ pendingPeopleMargoA, setPendingPeopleMargoA] = useState();
  const [ pendingPeopleMargoC, setPendingPeopleMargoC] = useState();
  const [ pendingPeopleMargoN, setPendingPeopleMargoN] = useState();
  const [ pendingPeopleMargoX, setPendingPeopleMargoX] = useState();

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

        setPresentPeopleA(data.presentPeopleA);
        setPresentPeopleC(data.presentPeopleC);
        setPresentPeopleN(data.presentPeopleN);
        setPresentPeopleX(data.presentPeopleX);

        setPresentPeopleAnselmoA(data.presentPeopleAnselmoA);
        setPresentPeopleAnselmoC(data.presentPeopleAnselmoC);
        setPresentPeopleAnselmoN(data.presentPeopleAnselmoN);
        setPresentPeopleAnselmoX(data.presentPeopleAnselmoX);

        setPresentPeopleMargoA(data.presentPeopleMargoA);
        setPresentPeopleMargoC(data.presentPeopleMargoC);
        setPresentPeopleMargoN(data.presentPeopleMargoN);
        setPresentPeopleMargoX(data.presentPeopleMargoX);

        setRecusedPeople(data.recusedPeople);

        setPendingPeopleA(data.pendingPeopleA);
        setPendingPeopleC(data.pendingPeopleC);
        setPendingPeopleN(data.pendingPeopleN);
        setPendingPeopleX(data.pendingPeopleX);

        setPendingPeopleAnselmoA(data.pendingPeopleAnselmoA);
        setPendingPeopleAnselmoC(data.pendingPeopleAnselmoC);
        setPendingPeopleAnselmoN(data.pendingPeopleAnselmoN);
        setPendingPeopleAnselmoX(data.pendingPeopleAnselmoX);

        setPendingPeopleMargoA(data.pendingPeopleMargoA);
        setPendingPeopleMargoC(data.pendingPeopleMargoC);
        setPendingPeopleMargoN(data.pendingPeopleMargoN);
        setPendingPeopleMargoX(data.pendingPeopleMargoX);
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

  const [show, setShow] = useState(true);

  const handleToggle = () => {
    alert(show);
    setShow(!show);
  };

  const backup = () => {
    alert('teste');
    console.log(guests);
      
    const downloadLink = document.getElementById('downloadBackup');

    downloadLink.click();
  }
  return (
    <>
      <a id="downloadBackup" href={guests} download="backupWedd.json" hidden></a>
      <Center
        mt={5}>
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
        />
        <ReactHTMLTableToExcel
                    id="test-table-xls-button"
                    className="download-table-xls-button"
                    table="table-to-xls"
                    filename="tablexls"
                    sheet="tablexls"
                    buttonText="Download as XLS"/>
        <Button onClick={backup}>Backup</Button>
      </Center>
      <Center fontSize={"xx-large"}>Resumo</Center>
      <Center display={"flex"} 
          flexDirection={"row"} 
          flexWrap={"wrap"}>
          <Text m={1}>Qtd.Convite: <b>{qtdInvite}</b></Text>
          <Text m={1}>Entregues: <b>{inviteDelivered}</b></Text>
          <Text m={1}>Total Pessoas Convidadas: <b>{totalPeople}</b></Text>
          <Text m={1}>Recusaram: <b>{recusedPeople}</b></Text>
          <Text m={1}>Convites não entregues: <b>{invitePending}</b> ({(invitePending/qtdInvite*100).toFixed(2)}%)</Text>
          <Text m={1}>Pessoas ainda não convidadas: <b>{invitePendingPeople}</b>          </Text>
      </Center>
      <Center display={"flex"} 
          flexDirection={"row"} 
          flexWrap={"wrap"}>

        <Box textAlign={"center"}              
          ml={10}
          mr={10}>
          <Text fontSize={"smaller"}>Presentes</Text>
            <Text fontSize={"small"} 
              fontWeight={700}
              onClick={handleToggle}>
              {presentPeopleA+presentPeopleC+presentPeopleN+presentPeopleX}
            </Text>
            <Box mt={4} display={"block"}
              fontSize={"xx-small"}>
                <Text>Adulto: <b>{presentPeopleA}</b></Text>
                <Text>
                    7 a 12 anos: <b>{presentPeopleC}</b>
                     ({presentPeopleC+pendingPeopleC})
                </Text>
                <Text>
                  Pagamos: <b>{presentPeopleA+presentPeopleC+presentPeopleX}</b>
                </Text>
                <Text>Menor de 7: <b>{presentPeopleN}</b></Text>
                {presentPeopleX>0 ? <Text>Sem idade: <b>{presentPeopleX}</b></Text> : null}
            </Box>
        </Box>
        <Box textAlign={"center"}              
          ml={10}
          mr={10}>
          <Text fontSize={"smaller"}>Pres.Margo</Text>
          <Text fontSize={"small"} 
              fontWeight={700}>
            {presentPeopleMargoA+presentPeopleMargoC+presentPeopleMargoN+presentPeopleMargoX}
          </Text>
          <Box fontSize={"xx-small"}>
            <Text>Adulto: <b>{presentPeopleMargoA}</b></Text>
            <Text>7 a 12 anos: <b>{presentPeopleMargoC}</b></Text>
            <Text>
              Pagamos: <b>{presentPeopleMargoA+presentPeopleMargoC+presentPeopleMargoX}</b>
            </Text>
            <Text>Menor de 7: <b>{presentPeopleMargoN}</b></Text>
            {presentPeopleMargoX>0 ? <Text>Sem idade: <b>{presentPeopleMargoX}</b></Text> : null}
          </Box>
        </Box>
        <Box textAlign={"center"}              
          ml={10}
          mr={10}>
          <Text fontSize={"smaller"}>Pres.Anselmo</Text>
          <Text fontSize={"small"} 
              fontWeight={700}>
            {presentPeopleAnselmoA+presentPeopleAnselmoC+presentPeopleAnselmoN+presentPeopleAnselmoX}
          </Text>
          <Box fontSize={"xx-small"}>
            <Text>Adulto: <b>{presentPeopleAnselmoA}</b></Text>
            <Text>7 a 12 anos: <b>{presentPeopleAnselmoC}</b></Text>
            <Text>
              Pagamos: <b>{presentPeopleAnselmoA+presentPeopleAnselmoC+presentPeopleAnselmoX}</b>
            </Text>
            <Text>Menor de 7: <b>{presentPeopleAnselmoN}</b></Text>
            {presentPeopleAnselmoX>0 ? <Text>Sem idade: <b>{presentPeopleAnselmoX}</b></Text> : null}
          </Box>
        </Box>

        <Box textAlign={"center"}              
          ml={10}
          mr={10}>
          <Text fontSize={"smaller"}>Confirmadas</Text>
            <Text fontSize={"small"} 
              fontWeight={700}
              onClick={handleToggle}>
              {confirmedPeopleA+confirmedPeopleC+confirmedPeopleN+confirmedPeopleX}
            </Text>
            <Box mt={4} display={"block"}
              fontSize={"xx-small"}>
                <Text>Adulto: <b>{confirmedPeopleA}</b></Text>
                <Text>
                    7 a 12 anos: <b>{confirmedPeopleC}</b>
                     ({confirmedPeopleC+pendingPeopleC})
                </Text>
                <Text>
                  Pagamos: <b>{confirmedPeopleA+confirmedPeopleC+confirmedPeopleX}</b>
                    ({confirmedPeopleA+confirmedPeopleC+confirmedPeopleX
                      +pendingPeopleA+pendingPeopleC+pendingPeopleX})
                </Text>
                <Text>Menor de 7: <b>{confirmedPeopleN}</b></Text>
                {confirmedPeopleX>0 ? <Text>Sem idade: <b>{confirmedPeopleX}</b></Text> : null}
            </Box>
        </Box>
        <Box textAlign={"center"}              
          ml={10}
          mr={10}>
          <Text fontSize={"smaller"}>Conf.Margo</Text>
          <Text fontSize={"small"} 
              fontWeight={700}>
            {confirmedPeopleMargoA+confirmedPeopleMargoC+confirmedPeopleMargoN+confirmedPeopleMargoX}
          </Text>
          <Box fontSize={"xx-small"}>
            <Text>Adulto: <b>{confirmedPeopleMargoA}</b></Text>
            <Text>7 a 12 anos: <b>{confirmedPeopleMargoC}</b></Text>
            <Text>
              Pagamos: <b>{confirmedPeopleMargoA+confirmedPeopleMargoC+confirmedPeopleMargoX}</b>
                ({confirmedPeopleMargoA+confirmedPeopleMargoC+confirmedPeopleMargoX
                 +pendingPeopleMargoA+pendingPeopleMargoC+pendingPeopleMargoN+pendingPeopleMargoX})
            </Text>
            <Text>Menor de 7: <b>{confirmedPeopleMargoN}</b></Text>
            {confirmedPeopleMargoX>0 ? <Text>Sem idade: <b>{confirmedPeopleMargoX}</b></Text> : null}
          </Box>
        </Box>
        <Box textAlign={"center"}              
          ml={10}
          mr={10}>
          <Text fontSize={"smaller"}>Conf.Anselmo</Text>
          <Text fontSize={"small"} 
              fontWeight={700}>
            {confirmedPeopleAnselmoA+confirmedPeopleAnselmoC+confirmedPeopleAnselmoN+confirmedPeopleAnselmoX}
          </Text>
          <Box fontSize={"xx-small"}>
            <Text>Adulto: <b>{confirmedPeopleAnselmoA}</b></Text>
            <Text>7 a 12 anos: <b>{confirmedPeopleAnselmoC}</b></Text>
            <Text>
              Pagamos: <b>{confirmedPeopleAnselmoA+confirmedPeopleAnselmoC+confirmedPeopleAnselmoX}</b>
              ({confirmedPeopleAnselmoA+confirmedPeopleAnselmoC+confirmedPeopleAnselmoX
                +pendingPeopleAnselmoA+pendingPeopleAnselmoC+pendingPeopleAnselmoX})
            </Text>
            <Text>Menor de 7: <b>{confirmedPeopleAnselmoN}</b></Text>
            {confirmedPeopleAnselmoX>0 ? <Text>Sem idade: <b>{confirmedPeopleAnselmoX}</b></Text> : null}
          </Box>
        </Box>

        <Box textAlign={"center"}              
          ml={10}
          mr={10}>
          <Text fontSize={"smaller"}>Pendente</Text>
          <Text fontSize={"small"} 
              fontWeight={700}>
            {pendingPeopleA+pendingPeopleC+pendingPeopleN+pendingPeopleX}
          </Text>
          <Box fontSize={"xx-small"}>
            <Text>Adulto: <b>{pendingPeopleA}</b></Text>
            <Text>7 a 12 anos: <b>{pendingPeopleC}</b></Text>
            <Text>
              Pagamos: <b>{pendingPeopleA+pendingPeopleC+pendingPeopleX}</b>                
            </Text>
            <Text>Menor de 7: <b>{pendingPeopleN}</b></Text>
            {pendingPeopleX>0 ? <Text>Sem idade: <b>{pendingPeopleX}</b></Text> : null}
          </Box>
        </Box>

        <Box textAlign={"center"}              
          ml={10}
          mr={10}>
          <Text fontSize={"smaller"}>Pend.Margo</Text>
          <Text fontSize={"small"} 
              fontWeight={700}>
            {pendingPeopleMargoA+pendingPeopleMargoC+pendingPeopleMargoN+pendingPeopleMargoX}
          </Text>
          <Box fontSize={"xx-small"}>
            <Text>Adulto: <b>{pendingPeopleMargoA}</b></Text>
            <Text>7 a 12 anos: <b>{pendingPeopleMargoC}</b></Text>
            <Text>Pagamos: <b>{pendingPeopleMargoA+pendingPeopleMargoC+pendingPeopleMargoX}</b></Text>
            <Text>Menor de 7: <b>{pendingPeopleMargoN}</b></Text>
            {pendingPeopleMargoX>0 ? <Text>Sem idade: <b>{pendingPeopleMargoX}</b></Text> : null}
          </Box>
        </Box>

        <Box textAlign={"center"}              
          ml={10}
          mr={10}>
          <Text fontSize={"smaller"}>Pend.Anselmo</Text>
          <Text fontSize={"small"} 
              fontWeight={700}>
            {pendingPeopleAnselmoA+pendingPeopleAnselmoC+pendingPeopleAnselmoN+pendingPeopleAnselmoX}
          </Text>
          <Box fontSize={"xx-small"}>
            <Text>Adulto: <b>{pendingPeopleAnselmoA}</b></Text>
            <Text>7 a 12 anos: <b>{pendingPeopleAnselmoC}</b></Text>
            <Text>Pagamos: <b>{pendingPeopleAnselmoA+pendingPeopleAnselmoC+pendingPeopleAnselmoX}</b></Text>
            <Text>Menor de 7: <b>{pendingPeopleAnselmoN}</b></Text>
            {pendingPeopleAnselmoX>0 ? <Text>Sem idade: <b>{pendingPeopleAnselmoX}</b></Text> : null}
          </Box>
        </Box>
      </Center>
      <Center display={"flex"}
          flexDirection={"row"}
          flexWrap={"wrap"}
          alignItems={"stretch"}>
        {guests.map((guest)=> {
          return (
            <GuestCard key={guest._id} guest={guest} />
          );
        })}
      </Center>

      <Center display={"none"}
          flexDirection={"row"}
          flexWrap={"wrap"}
          alignItems={"stretch"}>
        <table id="table-to-xls">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Família</th>
              <th>Noivo ou Noiva</th>
              <th>Acompanhantes</th>
              <th>Presente</th>
            </tr>
          </thead>
          <tbody>
            {guests.map((guest)=> {   
              console.log(guest);       
              return guest._doc.escorts
                .filter(f=>f.confirmed)
                .map((escort)=>{       
                  const escorts = guest._doc.escorts
                    .filter(f=>f.name !== escort.name && f.confirmed)
                    .map(escort => escort.name).join(', ');
                  return (
                    <tr>
                      <th>{escort.name}</th>
                      <th>{guest._doc.name}</th>
                      <th>{guest._doc.owner}</th>
                      <th>
                        {escorts}
                      </th>
                      <th>{escort.present?"Já Entrou":""}</th>
                    </tr>
                  );
                });
            })}
          </tbody>
        </table>
      </Center>

    </>

  );

} 

export default listguests;
