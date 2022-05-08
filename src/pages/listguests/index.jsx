import React, { useEffect, useState }  from 'react';
import GuestCard from '../../components/Guest';
import { Box, Flex, Center } from "@chakra-ui/react";

function listguests() {
  const [ guests , setGuests ] = useState([]);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/guests`)
      .then(response => response.json())
      .then(data => {
        setGuests(data);
        console.log(data);
      });
  }, []);

  return (
    <Center>
      <Flex flexWrap={'wrap'}>
        {guests.map((guest)=> {
          return (
            <GuestCard key={guest._id} guest={guest} />
          );
        })}
      </Flex>
    </Center>

  );

} 

export default listguests;
