'use client';
import { useState } from 'react';
import styles from '../../styles/footer.module.css';
import styles2 from '../../styles/filters.module.css';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';

const FilterAccordian = ({ title, data, ind }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <article key={ind}>
      <div
        className={styles.accordianClose}
        onClick={() => {
          setIsOpen((prev) => !prev);
        }}
      >
        <div className={styles2.filterInfo}>
          <h4> {title} </h4>
          <p> All </p>
        </div>
        <p className={styles.arrow}>
          {isOpen ? <MdKeyboardArrowDown /> : <MdKeyboardArrowUp />}
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
