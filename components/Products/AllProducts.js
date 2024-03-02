'use client';
import React, { useDebugValue, useEffect, useState } from 'react';
import Product from './Product';
import styles from '../../styles/allProducts.module.css';

function AllProducts({ showFavourites }) {
  const [productsList, setProductsList] = useState([]);
  const [favourites, setFavourites] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchProducts();
  }, []);

  async function fetchProducts() {
    setLoading(true);
    try {
      let apiData = await fetch('https://fakestoreapi.com/products');
      let data = await apiData.json();

      setProductsList(data);
    } catch (error) {
      console.log(error);

      setProductsList([]);
    }

    setLoading(false);
  }

  return (
    <div className={styles.container}>
      {loading ? (
        <h3> Loading... </h3>
      ) : (
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
      )}
    </div>
  );
}

export default AllProducts;
