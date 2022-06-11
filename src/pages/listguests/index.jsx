import React, { useEffect, useState }  from 'react';
import GuestCard from '../../components/Guest';
import { Box, Flex, Center, Input } from "@chakra-ui/react";
import { ReportRounded } from '@material-ui/icons';

function listguests() {
  const [ guests , setGuests ] = useState([]);
  const [ query, setQuery] = useState('')

  useEffect(() => {
    console.log("Inicio")
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/guests`)
      .then(response => response.json())
      .then(data => {
        setGuests(data);
      });
  }, []);

  useEffect(() => {

    if (!query) return 
   
   const parameters = new URLSearchParams({
      query : query});

    console.log("digitando");
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
          m={10}
        />
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
