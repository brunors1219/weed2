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

export default function ProductCard({ product, guest, guest_name, funcaoFechar, goDelete }) {

  const setPay = useCallback(async (product) => {

    const queryParams = new URLSearchParams({
      guest         : guest,
      guest_name    : guest_name,
      product_name  : product._doc.name,
      product_url   : product._doc.url,
      title         : product._doc.name,
      quantity      : 1,
      price         : product._doc.value,
    });

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/venda?${queryParams}`)
    
    const data = await response.text();
    
    funcaoFechar();
    
    window.location.href = data;
    
  }, []);

  const deleteProduct = useCallback(async (product) => {

    const queryParams = new URLSearchParams({
      _id  : product._doc._id,
    });

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products?${queryParams}`,
      {method: 'DELETE'});
    
      window.location.reload();
    
  }, []);

  return (
    <>
      <Center m="2">
        <Box 
          p="5" 
          maxW="200px" 
          borderWidth="2px" 
          borderRadius="15%"
          w={"45vw"}>

          {!product._doc.gifted
            ? <Flex align="baseline" mt={2}>
                <Category colorScheme="green">Presenteado</Category>
              </Flex>

            :null}
          <Flex align="baseline" mt={2}>
            <Category colorScheme="pink">{product._doc.category}</Category>
          </Flex>

          <Center>
            <Image 
              w={"100%"} 
              h={"100px"} borderRadius="md" src={product._doc.url} />
          </Center>

          <Title mt={2} fontSize="small" 
            fontWeight="semibold" 
            lineHeight="short">
            {product._doc.name}
          </Title>

          <Text 
            color={"white"}
            textAlign="right"
            fontSize={"large"}
            m="2px">
            R$ {product._doc.value},00 
          </Text>
          <Center>            
            {!product._doc.gifted
              ? <Button 
                  w={"90%"}
                  onClick={() => setPay(product)}>
                  Presentear
                </Button>
              : null}
            <Button 
              m={1}
              backgroundColor={"red"}
              w={"50%"}
              display={goDelete ? "block" : "none"}
              onClick={() => deleteProduct(product)}>
              Exc
            </Button>
          </Center>
        </Box>
      </Center>
    </>
  );
}