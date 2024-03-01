import React from 'react';
import AllProducts from './Products/AllProducts';
import styles from '../styles/index.module.css';
import Footer from './Footer';
import Navbar from './Navbar';
import Filters from './Filters/Index';

function Index() {
  return (
    <div>
      <Navbar />

      <div style={{ marginLeft: '5vw', marginTop: '20px' }}>
        <p>
          {' '}
          <span style={{ color: '#BFC8CD' }}> HOME | </span> SHOP
        </p>
      </div>

      <div className={styles.titleContainer}>
        <h1 className={styles.mainHeading}> DISCOVER OUR PRODUCTS </h1>
        <p className={styles.mainText}>
          Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
          scelerisque. Dolor integer scelerisque nibh amet mi ut elementum
          dolor.
        </p>
      </div>

      <Filters />

      <AllProducts />

      <Footer />
    </div>
  );
}

export default Index;
