import { Box, Flex, Badge, Text, Button } from "@chakra-ui/react";
import { MdStar } from "react-icons/md";

export default function GuestCard({ guest }) {
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
      <Flex align="baseline" mt={2} flexWrap={'wrap'}>
        {guest._doc.escorts.map((escort)=>{
          return (
            <Badge m={1} colorScheme="pink">{escort.name}</Badge>
          );
        })}
      </Flex>
      <Text mt={2} fontSize="10px" fontWeight="semibold" lineHeight="short">
        {guest.invitation_url}
      </Text>
      <Button w="100%">
        <Text fontSize="20px" color="pink" fontWeight={"extrabold"}>
          Copiar o link
        </Text>
      </Button>
    </Box>
  );
}