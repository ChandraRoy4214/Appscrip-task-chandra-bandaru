'use client';

import { useState } from 'react';
import AllProducts from './Products/AllProducts';
import styles from '../styles/index.module.css';
import Footer from './Footer';
import Navbar from './Navbar';
import MobileFilters from './Filters/Mobile';
import DesktopFilters from './Filters/Desktop';

function Index() {
  const [showFavourites, setShowFavourites] = useState(false);
  const [hideFilters, setHideFilters] = useState(false);

  return (
    <div>
      <Navbar
        showFavourites={showFavourites}
        setShowFavourites={setShowFavourites}
      />

      <div className={styles.navCategories}>
        <p>
          <span style={{ color: '#BFC8CD' }}> HOME | </span> SHOP
        </p>
      </div>

      <div className={styles.desktopNavigation}>
        <h4> SHOP </h4>
        <h4> SKILLS </h4>
        <h4> STORIES </h4>
        <h4> ABOUT </h4>
        <h4> CONTACT US </h4>
      </div>

      <div className={styles.titleContainer}>
        <h1 className={styles.mainHeading}> DISCOVER OUR PRODUCTS </h1>
        <p className={styles.mainText}>
          Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
          scelerisque. Dolor integer scelerisque nibh amet mi ut elementum
          dolor.
        </p>
      </div>

      <MobileFilters
        hideFilters={hideFilters}
        setHideFilters={setHideFilters}
      />

      <div className={styles.container}>
        {!hideFilters && <DesktopFilters />}

        <AllProducts showFavourites={showFavourites} />
      </div>

      <Footer />
    </div>
  );
}

export default Index;
