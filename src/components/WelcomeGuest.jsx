import { Box, Center, Image, Flex, Badge, Text, Button } from "@chakra-ui/react";
import styled from '@emotion/styled';

const Title = styled(Text)`
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

export default function WelcomeGuest({ guest, back }) {

  if (!guest) {
    return null;
  }

  return (
    <>
      <Center m="2" bgColor={"blue"} h={"100vh"}>
          <Flex align="baseline" mt={2}>
            <Text colorScheme="pink">Sejam todos muito bem vindos  </Text>
          </Flex>

          <Center>
          </Center>

          <Title mt={2} fontSize="small" 
            fontWeight="semibold" 
            lineHeight="short">
            {guest}
          </Title>

          <Center>            
            <Button 
              w={"90%"}
              onClick={() => back()}>
              Voltar
            </Button>
          </Center>
      </Center>
    </>
  );
}