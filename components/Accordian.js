'use client';
import styles from '../styles/footer.module.css';

import { MdKeyboardArrowDown } from 'react-icons/md';

import { useState } from 'react';

const Accordian = ({ title }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <article>
      <div
        className={styles.accordianClose}
        onClick={() => {
          setIsOpen((prev) => !prev);
        }}
      >
        <h2> {title} </h2>
        <p
          style={{
            fontSize: '2em',
            transition: '0.5s ease-out',
            rotate: isOpen ? '180deg' : '0deg',
          }}
        >
          <MdKeyboardArrowDown />
        </p>
      </div>

      {isOpen ? <div className={styles.accordianInfo}></div> : ''}
    </article>
  );
};

export default Accordian;
