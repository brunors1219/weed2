import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { Center, Box, Flex, Text, Button, Image } from "@chakra-ui/react";
import { MdStar } from "react-icons/md/index.js";
import { ImMan, ImQuestion } from "react-icons/im/index.js";
import { FaBaby, FaChild } from "react-icons/fa/index.js";
import { FcOk, FcCancel } from "react-icons/fc/index.js";
import { LiaEdit } from "react-icons/lia/index.js";
import { GrClose } from "react-icons/gr";
import Gifts from './gifts';


export default function GuestCard({ guest }) {

  const copyToClipboard = () => {
    navigator.clipboard.writeText(guest.invitation_url);

    console.log('Guest: ', guest);

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

  const updateName = (guest_id, escort_id, name) => {

    let newName = prompt("Coloque o nome completo", name);
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/nameguest`, {
      method: 'POST',
      body: JSON.stringify({
        guest_id,
        escort_id,
        newName
      }),
    })
      .then(response => {
        response.json();
      });

  }

  const router = useRouter();
  const handleGuest = () => {
    console.log('Guest Id:', guest._doc._id);
    router.push({
      pathname: '/insertGuests',
      query: {
        id: guest._doc._id,
        owner: guest._doc.owner,
        name: guest._doc.name,
        referency: guest._doc.referency,
        email: guest._doc.email,
        age: guest._doc.age,
        phone: guest._doc.phone,
        confirmed: guest._doc.confirmed,
        dueDate: guest._doc.dueDate,
        escorts: JSON.stringify(guest._doc.escorts)
      }
    });
  }

  const handleRemove = () => { //função para fazer remoção do convidado
    if (confirm("Tem certeza que deseja remover este convidado?")) {
      fetch(`${process.env.NEXT_PUBLIC_API_URL}/remove`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: guest._doc._id
        }),
      })
        .then(response => response.json())
        .then(data => {
          if (data.success) {
            alert("Convidado removido com sucesso!");
            router.replace(router.asPath); 
          } else {
            alert("Falha ao remover o convidado.");
          }
        })
        .catch(error => {
          console.error('Erro ao remover convidado:', error);
          alert("Ocorreu um erro ao remover o convidado.");
        });
    }
  };


  return (
    <Box p="1" w="19%" minW={"170px"} borderWidth="1px" m="2px" backgroundColor={guest._doc.dueDate ? 'green.300' : 'none'}>
      <Flex mt={2} align="end" mr="0px">
        <Box as={MdStar} color="orange.400" />
        <Text ml={1} fontSize="10px" color={"GrayText"}>
          <b>{guest._doc.owner}</b>
        </Text>

      </Flex>
      <Flex justifyContent={"flex-end"} direction="row" gap="2">
        <Button onClick={handleGuest}>
          <LiaEdit
            color='green'
            fontSize='28px' />
        </Button>

        <Button onClick={handleRemove}>
          <GrClose 
            color='red'
            fontSize='28px' />
        </Button>
      </Flex>
      <Text mt={1} fontSize="15px" fontWeight="extrabold">
        {guest._doc.name}
      </Text>
      <Center>
        <Flex align="baseline" mt={2} flexWrap={'wrap'}>
          <Center
            flexWrap={'wrap'}
            style={{ "display": "flex", "flex-directions": "row", }}>
            {guest._doc.escorts.map((escort) => {
              return (
                <Center m={1} style={{
                  "background-color": escort.confirmed === null ? "Yellow" : escort.confirmed ? "Green.300" : "Pink",
                  "color": escort.confirmed === null ? "red" : escort.confirmed ? "white" : "white",
                  "display": "flex",
                  "align-items": "center"
                }}>
                  <Text onClick={() => updateAge(guest._doc._id, escort._id, null)}>{escort.confirmed === null ? <ImQuestion /> : escort.confirmed ? <FcOk /> : <FcCancel />}</Text>
                  <Text onClick={() => updateName(guest._doc._id, escort._id, escort.name)}>{escort.name}</Text>
                  {!escort.age ? <ImMan onClick={() => updateAge(guest._doc._id, escort._id, 18)} /> : escort.age > 12 ? <ImMan /> : null}
                  {!escort.age ? <FaChild onClick={() => updateAge(guest._doc._id, escort._id, 11)} /> : escort.age > 7 && escort.age < 13 ? <FaChild /> : null}
                  {!escort.age ? <FaBaby onClick={() => updateAge(guest._doc._id, escort._id, 6)} /> : escort.age < 8 ? <FaBaby /> : null}
                </Center>
              );
            })}
          </Center>
        </Flex>
      </Center>
      {console.log('Guest Gifts: ', guest.gifts)}
      {(guest.gifts != undefined)
        ? <>
          <Text p={4}
            textAlign={"center"}>
            {guest.gifts.product_name}
          </Text>
          <Center>
            <Image
              w={100}
              h={100}
              src={guest.gifts.product_url}
            />
          </Center>
        </>
        : null
      }
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
            onClick={() => copyToClipboard()}>
            Copiar o link
          </Text>
        </Button>

      </Text>
    </Box>
  );
}