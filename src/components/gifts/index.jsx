import React, { useEffect, useState, useCallback }  from 'react';
import { useRouter } from 'next/router'; 
import ProductCard from './../../components/Product';
import { Flex, IconButton } from '@chakra-ui/react';
import { CloseIcon } from '@chakra-ui/icons';
import { ButtonClose } from './styles';

function Gifts({Visivel, funcaoFechar, guest}) {

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
      <ButtonClose>
        <IconButton
          colorScheme='teal'
          aria-label='Call Segun'
          size='lg'
          icon={<CloseIcon />}
          onClick={() => funcaoFechar() }          
        />    
      </ButtonClose>
      <Flex flexWrap={'wrap'}>
        {products.map((item)=> {
          return (
            <ProductCard key={item._id} product={item} guest={guest} />
          );
        })}
      </Flex>
    </>
  );

} 

export default Gifts;
