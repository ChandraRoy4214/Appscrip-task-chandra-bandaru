'use client';
import React, { useEffect, useState } from 'react';
import Product from './Product';
import styles from '../../styles/allProducts.module.css';

function AllProducts({ showFavourites }) {
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

  return (
    <div className={styles.container}>
      <div className={styles.productContainer}>
        {showFavourites && !favourites?.length && (
          <p className={styles.noFavourites}> No Favourite Items! </p>
        )}
        {productsList?.map((product) => {
          if (showFavourites && !favourites.includes(product.id)) return;

          return (
            <Product
              key={product.id}
              product={product}
              favourites={favourites}
              setFavourites={setFavourites}
              showFavourites={showFavourites}
            />
          );
        })}
      </div>
    </div>
  );
}

export default AllProducts;
