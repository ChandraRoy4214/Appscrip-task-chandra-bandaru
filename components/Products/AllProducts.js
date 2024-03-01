'use client';
import React, { useEffect, useState } from 'react';
import Product from './Product';
import styles from '../../styles/allProducts.module.css';

function AllProducts() {
  const [productsList, setProductsList] = useState([]);
  const [favourites, setFavourites] = useState([]);

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

  console.log('favourites: ', favourites);

  return (
    <div className={styles.container}>
      <div className={styles.productContainer}>
        {productsList?.map((product) => {
          return (
            <Product
              key={product.id}
              product={product}
              favourites={favourites}
              setFavourites={setFavourites}
            />
          );
        })}
      </div>
    </div>
  );
}

export default AllProducts;
