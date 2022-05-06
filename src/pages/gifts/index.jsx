import React, { useEffect, useState, useCallback }  from 'react';
import { useRouter } from 'next/router'; 
import ProductCard from './../../components/Product';

function gifts() {
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
    <div>
      {products.map((item)=> {
        return (
          <ProductCard key={item._id} product={item} />
        );
      })}
    </div>
  );

} 

export default gifts;
