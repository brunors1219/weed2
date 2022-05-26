import { Box, Flex, Badge, Text, Button } from "@chakra-ui/react";
import { MdStar } from "react-icons/md";

export default function GuestCard({ guest }) {
  console.log(guest._doc.confirmed);
  return (
    <Box p="5" w="30vw" borderWidth="1px" m="5px">
      <Flex mt={2} align="end" mr="0px">
        <Box as={MdStar} color="orange.400" />
        <Text ml={1} fontSize="10px" color={"GrayText"}>
          <b>{guest._doc.owner}</b>
        </Text>
      </Flex>      
      <Text mt={1} fontSize="15px" fontWeight="extrabold">
        {guest._doc.name}
      </Text>
      <Text mt={1} fontSize="15px">
        Status: {guest._doc.confirmed === null ? "Pendente" : guest._doc.confirmed ? "Confirmado" : "Não Vai"}
      </Text>
      <Flex align="baseline" mt={2} flexWrap={'wrap'}>
        {guest._doc.escorts.map((escort)=>{
          return (
            <Badge m={1} colorScheme="pink">
              {escort.name}
              ({escort.confirmed === null ? "Pendente" : escort.confirmed ? "Confirmado" : "Não Vai"})
            </Badge>
          );
        })}
      </Flex>
      <Text mt={2} fontSize="10px" fontWeight="semibold" lineHeight="short">
        <a href={guest.invitation_url}>Link do convite</a>
      </Text>
      <Button w="100%">
        <Text fontSize="20px" color="pink" fontWeight={"extrabold"}>
          Copiar o link
        </Text>
      </Button>
    </Box>
  );
}