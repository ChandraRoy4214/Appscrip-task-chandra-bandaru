import styles from '../../styles/filters.module.css';
import RecommendPopup from './RecommendPopup';
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from 'react-icons/md';

function Mobile({ hideFilters, setHideFilters }) {
  return (
    <div className={styles.filtersContainer}>
      <div className={styles.showHide}>
        <p> 20 ITEMS </p>

        <div
          className={styles.hideFilter}
          onClick={() => {
            setHideFilters((prev) => !prev);
          }}
        >
          <p style={{ marginBottom: '-10px' }}>
            {hideFilters ? <MdKeyboardArrowRight /> : <MdKeyboardArrowLeft />}
          </p>
          <p style={{ fontSize: '16px' }}>
            {hideFilters ? 'SHOW' : 'HIDE'} FILTER
          </p>
        </div>
      </div>

      <p className={styles.filterText}> FILTER </p>
      <p className={styles.line}></p>
      <RecommendPopup />
    </div>
  );
}

export default Mobile;
