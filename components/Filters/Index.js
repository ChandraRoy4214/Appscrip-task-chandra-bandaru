import React from 'react';
import styles from '../../styles/filters.module.css';
import { MdKeyboardArrowDown } from 'react-icons/md';

function Index() {
  return (
    <section>
      <div className={styles.filtersContainer}>
        <p> FILTER </p>
        <p className={styles.line}></p>

        <div className={styles.recommend}>
          <p>RECOMMENDED</p>
          <p
            style={{
              fontSize: '2em',
              paddingTop: '8px',
              // transition: '0.5s ease-out',
              // rotate: isOpen ? '180deg' : '0deg',
            }}
          >
            <MdKeyboardArrowDown />
          </p>
        </div>
      </div>
    </section>
  );
}

export default Index;
