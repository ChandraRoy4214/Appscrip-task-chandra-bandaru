'use client';
import { useState } from 'react';
import styles from '../../styles/footer.module.css';
import styles2 from '../../styles/filters.module.css';
import { MdKeyboardArrowDown } from 'react-icons/md';

const FilterAccordian = ({ title, data }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <article>
      <div
        className={styles.accordianClose}
        onClick={() => {
          setIsOpen((prev) => !prev);
        }}
      >
        <h4> {title} </h4>
        <p
          style={{
            fontSize: '24px',
            color: '#292D32',
            transition: '0.5s ease-out',
            rotate: isOpen ? '180deg' : '0deg',
          }}
        >
          <MdKeyboardArrowDown />
        </p>
      </div>

      {isOpen ? (
        <div className={styles.accordianInfo}>
          {data?.map((item, ind) => {
            return (
              <div key={ind} className={styles2.accordianInfoItem}>
                <div>
                  <input type='checkbox' className={styles2.checkBox} />
                </div>
                <p> {item} </p>
              </div>
            );
          })}
        </div>
      ) : (
        ''
      )}
    </article>
  );
};

export default FilterAccordian;
