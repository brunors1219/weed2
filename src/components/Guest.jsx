import React, { useState } from 'react';
import { Center, Box, Flex, Badge, Text, Button } from "@chakra-ui/react";
import { MdStar } from "react-icons/md";
import { ImMan, ImQuestion } from "react-icons/im";
import { FaBaby, FaChild } from "react-icons/fa";
import { FcOk, FcCancel } from "react-icons/fc";

export default function GuestCard({ guest }) {

  const copyToClipboard = () => {
    navigator.clipboard.writeText(guest.invitation_url);

    console.log(guest);

    fetch(`${process.env.NEXT_PUBLIC_API_URL}/guests/${guest._doc._id}`, {
      method: 'POST',
      body: JSON.stringify({
        id: guest._doc._id
      }),
    })
    .then(response => {
        response.json();          
    });
  
    alert("Texto Copiado!");
  }

  const updateAge = (guest_id, escort_id, age) => {

    fetch(`${process.env.NEXT_PUBLIC_API_URL}/age`, {
      method: 'POST',
      body: JSON.stringify({
        guest_id,
        escort_id,
        age
      }),
    })
    .then(response => {
        response.json();          
    });
    
  }

  return (
    <Box p="1" w="19%" minW={"170px"} borderWidth="1px" m="2px" backgroundColor={guest._doc.dueDate ? 'green.300':'none'}>
      <Flex mt={2} align="end" mr="0px">
        <Box as={MdStar} color="orange.400" />
        <Text ml={1} fontSize="10px" color={"GrayText"}>
          <b>{guest._doc.owner}</b>
        </Text>
      </Flex>      
      <Text mt={1} fontSize="15px" fontWeight="extrabold">
        {guest._doc.name}
      </Text>
      <Center>
        <Flex align="baseline" mt={2} flexWrap={'wrap'}>
          <Center 
              flexWrap={'wrap'}
              style={{"display":"flex", "flex-directions":"row",}}>
            {guest._doc.escorts.map((escort)=>{
              return (            
                <Center m={1} style={{
                    "background-color":escort.confirmed === null ? "Yellow" : escort.confirmed ? "Green.300" : "Pink",
                    "color":escort.confirmed === null ? "red" : escort.confirmed ? "white" : "white",
                    "display":"flex",
                    "align-items":"center"        
                    }}>
                  <Text onClick={()=>updateAge(guest._doc._id, escort._id, null )}>{escort.confirmed === null ? <ImQuestion /> : escort.confirmed ? <FcOk /> : <FcCancel />}</Text>
                  <Text >{escort.name}</Text>
                  {!escort.age ? <ImMan onClick={()=>updateAge(guest._doc._id, escort._id, 18 )}/> : escort.age > 12 ? <ImMan /> : null}
                  {!escort.age ? <FaChild onClick={()=>updateAge(guest._doc._id, escort._id, 11 )}/> : escort.age > 7 && escort.age < 13 ? <FaChild /> : null }
                  {!escort.age ? <FaBaby onClick={()=>updateAge(guest._doc._id, escort._id, 6 )}/>  : escort.age < 8 ? <FaBaby/> : null }
                </Center>
              );
            })}
          </Center>
        </Flex>
      </Center>
      <Text 
        color={"blue"}
        fontSize="smaller" 
        fontWeight="semibold" 
        lineHeight="short"
        textAlign={"center"}>
        <a href={guest.invitation_url}>Clique aqui para abrir o convite</a>
        <Button w="100%" h={"20px"}>
        <Text 
          fontSize="10px" 
          color="pink" 
          fontWeight={"extrabold"}
          onClick={()=>copyToClipboard()}>
          Copiar o link
        </Text>
      </Button>

      </Text>
    </Box>
  );
}