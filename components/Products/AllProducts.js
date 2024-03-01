'use client';
import React, { useEffect, useState } from 'react';
import Product from './Product';

function AllProducts() {
  const [productsList, setProductsList] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  async function fetchProducts() {
    try {
      let apiData = await fetch('https://fakestoreapi.com/products');
      let data = await apiData.json();

      setProductsList(data);
    } catch (error) {
      console.log(error);

      setProductsList([]);
    }
  }

  return (
    <div>
      {productsList?.map((item, ind) => {
        return <Product key={ind} item={item} />;
      })}
    </div>
  );
}

export default AllProducts;
