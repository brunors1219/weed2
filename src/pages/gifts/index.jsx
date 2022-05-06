import React, { useEffect, useState, useCallback }  from 'react';
import { useRouter } from 'next/router'; 


function gifts() {
  const { query } = useRouter();
  const { id } = query;
  const [ products , setProducts ] = useState([]);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/products`)
      .then(response => response.json())
      .then(data => setProducts(data));
    console.log(products);
  }, []);

  return (
    <div>
      {products.map((item)=>{
        <p>item.name</p>
      })}
    </div>
  );

} 

export default gifts;
