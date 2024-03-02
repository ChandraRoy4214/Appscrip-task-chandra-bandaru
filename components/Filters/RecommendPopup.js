import { useState } from 'react';
import styles from '../../styles/filters.module.css';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { FILTERS } from '../../enums';
import { FaCheck } from 'react-icons/fa';

function RecommendPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setIsSelected] = useState(0);

  return (
    <div className={styles.recommendContainer}>
      <div
        className={styles.recommend}
        style={{
          minWidth: '250px',
        }}
        onClick={() => {
          setIsOpen((prev) => !prev);
        }}
      >
        <p style={{ textTransform: 'uppercase', textAlign: 'center' }}>
          {FILTERS[selected]}
        </p>
        <p
          style={{
            fontSize: '2em',
            paddingTop: '8px',
          }}
        >
          <MdKeyboardArrowDown />
        </p>
      </div>
      {isOpen && (
        <div className={styles.recommendPopup}>
          {FILTERS?.map((item, ind) => {
            return (
              <div
                key={ind}
                onClick={() => {
                  setIsSelected(ind);
                  setIsOpen((prev) => !prev);
                }}
                className={styles.popupItem}
              >
                <p className={styles.tick}>
                  {selected === ind && (
                    <span>
                      <FaCheck />
                    </span>
                  )}
                </p>
                <p>{item}</p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default RecommendPopup;
