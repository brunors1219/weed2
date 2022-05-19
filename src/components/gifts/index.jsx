import React, { useEffect, useState, useCallback }  from 'react';
import { useRouter } from 'next/router'; 
import { Flex, Box, IconButton, Select, Text } from '@chakra-ui/react';
import { CloseIcon } from '@chakra-ui/icons';
import { ButtonClose, Fundo } from './styles';
import ProductCard from './../../components/Product';
import ProductBuied from './../../components/ProductBuied';

function Gifts({Visivel, funcaoFechar, guest, guest_name}) {

  if (!Visivel) {
    return null;
  }

  const { query } = useRouter();
  const { id } = query;
  const [ products , setProducts ] = useState([]);

  useEffect(() => {

    const queryParams = new URLSearchParams({
      category: "Casa, Móveis e Decoração",
    });

    fetch(`${process.env.NEXT_PUBLIC_API_URL}/products?${queryParams}`)
      .then(response => response.json())
      .then(data => {
        setProducts(data);
      });

  }, []);

  function getProducts(category) {
    const queryParams = new URLSearchParams({
      category: category,
    });

    fetch(`${process.env.NEXT_PUBLIC_API_URL}/products?${queryParams}`)
      .then(response => response.json())
      .then(data => {
        setProducts(data);
      });
          
  };

  return (    
    <Fundo>
      <ButtonClose>
        <IconButton
          colorScheme='teal'
          aria-label='Call Segun'
          size='lg'
          icon={<CloseIcon />}
          onClick={() => funcaoFechar() }          
        />    
      </ButtonClose>
      <Flex flexWrap={'wrap'} alignItems={"center"}>
        <Box textAlign={"center"} p={2}>
           <Text width={"80%"}>
           Segue um pouco de nossa sugestão, mas fique a vontade se não encontrar nada aqui.
           </Text>

           <ProductBuied guest={guest} />
        </Box>

        <Select 
          id="category" 
          placeholder='Escolha a categoria...' 
          margin={"auto"}
          width={"80%"}
          onChange={() => getProducts(document.querySelector('#category').value)}>
          <option value="Casa, Móveis e Decoração">Casa, Móveis e Decoração</option>
          <option value="Eletrodomésticos">Eletrodomésticos</option>
          <option value="Eletrônicos e Acessórios">Eletrônicos e Acessórios</option>
          <option value="Esportes">Esportes</option>
          <option value="Laser">Laser</option>
          <option value="Ferramentas">Ferramentas</option>
        </Select>

        {products.map((item)=> {
          return (
            <ProductCard 
              key={item._id} 
              product={item} 
              guest={guest} 
              guest_name={guest_name}
              funcaoFechar={funcaoFechar}/>
          );
        })}
      </Flex>
    </Fundo>
  );

} 

export default Gifts;
