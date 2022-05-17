import { useCallback } from 'react';
import { Box, Center, Image, Flex, Badge, Text, Button } from "@chakra-ui/react";
import styled from '@emotion/styled';

const Title = styled(Text)`
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;
const Category = styled(Badge)`
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

export default function ProductCard({ product, guest }) {

  const setPay = useCallback(async (product) => {

    const queryParams = new URLSearchParams({
      guest   : guest,
      product : product._id,
      title   : product.name,
      quantity: 1,
      price   : product.value,
    });

    console.log(queryParams);

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/venda?${queryParams}`)
    
    const data = await response.text();

    window.open(data);
  }, []);

  return (
    <>
      <Center m="2">
        <Box p="5" maxW="320px" borderWidth="1px" w={"45vw"}>
          <Title mt={2} fontSize="small" 
            fontWeight="semibold" 
            lineHeight="short">
            {product.name}
          </Title>

          <Flex align="baseline" mt={2}>
            <Category colorScheme="pink">{product.category}</Category>
          </Flex>

          <Center>
            <Image with={"80px"} height={"100px"} borderRadius="md" src={product.url} />
          </Center>

          <Text mt={2}>R$ {product.value}</Text>
          <Button onClick={() => setPay(product)}>
            Comprar
          </Button>
        </Box>
      </Center>
    </>
  );
}