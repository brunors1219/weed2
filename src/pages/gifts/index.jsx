import React, { useEffect, useState, useCallback }  from 'react';
import { useRouter } from 'next/router'; 
import ProductCard from './../../components/Product';
import { Flex, Box } from '@chakra-ui/react';
import { IconButton } from '@chakra-ui/react'
import { CloseIcon } from '@chakra-ui/icons';
import styled from '@emotion/styled';

const btnClose = styled(Box)`
    position: fixed;
    margin-right: 0px;
    top: 7px;
    right: 7px;
`;

function gifts({Visivel, funcaoFechar}) {

  if (!Visivel) {
    return null;
  }

  const { query } = useRouter();
  const { id } = query;
  const [ products , setProducts ] = useState([]);

  useEffect(() => {
  
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/products`)
      .then(response => response.json())
      .then(data => {
        setProducts(data);
      });
  }, []);

  return (    
    <>
      <btnClose>
        <IconButton
          colorScheme='teal'
          aria-label='Call Segun'
          size='lg'
          icon={<CloseIcon />}
          onClick={() => funcaoFechar() }          
        />    
      </btnClose>
      <Flex flexWrap={'wrap'}>
        {products.map((item)=> {
          return (
            <ProductCard key={item._id} product={item} />
          );
        })}
      </Flex>
    </>
  );

} 

export default gifts;
