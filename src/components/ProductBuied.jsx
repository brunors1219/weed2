import { useEffect, useState } from 'react';
import { Box, Center, Image, Text } from "@chakra-ui/react";
import styled from '@emotion/styled';

const Title = styled(Text)`
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;
const Caixa = styled(Center)`
    background-color: #e4d2e4;
    border-radius: 20%;
    color:black;
`;

export default function ProductBuied({ guest }) {

  const [ products , setProducts ] = useState([]);

  useEffect(() => {

    const queryParams = new URLSearchParams({
      guest         : guest,
    });

    fetch(`${process.env.NEXT_PUBLIC_API_URL}/productBuied?${queryParams}`)
      .then(response => response.json())
      .then(data => {
        setProducts(data);
      });

  }, []);

  if (products.length==0)
    return;

  return (
    <Caixa>
      {products.map((item)=> {
          console.log(item);
          return (
            <Box p="5" maxW="320px">
              <Title mt={2} fontSize="larger" 
                fontWeight="semibold" 
                lineHeight="short">
                Seu Presente
              </Title>

              <Title mt={2} fontSize="small" 
                fontWeight="semibold" 
                lineHeight="short">
                {item.product_name}
              </Title>

              <Center>
                <Image with={"80px"} height={"100px"} borderRadius="md" src={item.product_url} />
              </Center>

              <Text mt={2}>Status: {item.request_Status}</Text>
            </Box>
          )
          })};
    </Caixa>
  );
}