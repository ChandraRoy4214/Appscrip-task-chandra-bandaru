import styles from '../../styles/filters.module.css';
import RecommendPopup from './RecommendPopup';

function Mobile() {
  return (
    <div className={styles.filtersContainer}>
      <p> FILTER </p>
      <p className={styles.line}></p>
      <RecommendPopup />
    </div>
  );
}

export default Mobile;
