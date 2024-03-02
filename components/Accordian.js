'use client';
import { useState } from 'react';
import styles from '../styles/footer.module.css';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { IoLogoInstagram, IoLogoLinkedin } from 'react-icons/io5';

const Accordian = ({ title, data }) => {
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

      {isOpen ? (
        <div className={styles.accordianInfo}>
          {data?.length ? (
            data?.map((item, ind) => {
              return <p key={ind}> {item} </p>;
            })
          ) : (
            <div
              style={{
                display: 'flex',
                gap: '10px',
                marginTop: '10px',
                fontSize: '20px',
              }}
            >
              <div className={styles.logo}>
                <IoLogoInstagram />
              </div>
              <div className={styles.logo}>
                <IoLogoLinkedin />
              </div>
            </div>
          )}
        </div>
      ) : (
        ''
      )}
    </article>
  );
};

export default Accordian;
