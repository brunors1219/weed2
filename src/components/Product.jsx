import { Box, Center, Image, Flex, Badge, Text } from "@chakra-ui/react";

export default function ProductCard({ product }) {
  return (
    <Center h="40vh">
      <Box p="5" maxW="320px" borderWidth="1px">
        <Image borderRadius="md" src={`/images/products/${product.img}`} />
        <Flex align="baseline" mt={2}>
          <Badge colorScheme="pink">{product.name}</Badge>
          <Text
            ml={2}
            textTransform="uppercase"
            fontSize="sm"
            fontWeight="bold"
            color="pink.800"
          >
            Verified &bull; Cape Town
          </Text>
        </Flex>
        <Text mt={2} fontSize="xl" fontWeight="semibold" lineHeight="short">
          {product.url}
        </Text>
        <Text mt={2}>$119/night</Text>
        <Flex mt={2} align="center">
          <Text ml={1} fontSize="sm">
            <b>4.84</b> (190)
          </Text>
        </Flex>
      </Box>
    </Center>
  );
}