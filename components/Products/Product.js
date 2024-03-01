import Image from 'next/image';
import React from 'react';
import styles from '../../styles/product.module.css';
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md';

function Product({ product, favourites, setFavourites }) {
  let { id, image, title } = product;

  function manageFavourite(productId) {
    if (favourites.includes(productId)) {
      let newList = favourites.filter((favId) => favId !== productId);

      setFavourites([...newList]);
    } else {
      setFavourites((prev) => {
        return [...prev, productId];
      });
    }
  }

  return (
    <div className={styles.productContainer}>
      <div className={styles.imageContainer}>
        <Image
          unoptimized={true}
          src={image}
          alt={title}
          width={168}
          height={224}
        />
      </div>

      <div className={styles.productInfo}>
        <p className={styles.productTitle}> {title} </p>

        <div
          style={{ fontSize: '24px', cursor: 'pointer' }}
          onClick={() => {
            manageFavourite(product?.id);
          }}
        >
          {favourites?.includes(id) ? (
            <span style={{ color: 'red' }}>
              <MdFavorite />
            </span>
          ) : (
            <MdFavoriteBorder />
          )}
        </div>
      </div>
      <p style={{ fontSize: '12px', maxWidth: '165px', color: '#888792' }}>
        <a href='/'>
          <span className={styles.signIn}> Sign in </span> or Create an account
          to see pricing
        </a>
      </p>
    </div>
  );
}

export default Product;
