import styles from '../../styles/filters.module.css';
import {
  IDEAL_FOR,
  OCCASION,
  WORK,
  FABRIC,
  SEGMENT,
  SUITABLE_FOR,
  RAW_MATERIALS,
  PATTERNS,
} from '../../enums';
import FilterAccordian from './FilterAccordian';
const filtersList = [
  'IDEAL FOR',
  'OCCASION',
  'WORK',
  'FABRIC',
  'SEGMENT',
  'SUITABLE FOR',
  'RAW MATERIALS',
  'PATTERNS',
];

const filtersData = {
  'IDEAL FOR': IDEAL_FOR,
  OCCASION,
  WORK,
  FABRIC,
  SEGMENT,
  'SUITABLE FOR': SUITABLE_FOR,
  'RAW MATERIALS': RAW_MATERIALS,
  PATTERNS,
};

function Desktop() {
  return (
    <article className={styles.desktop}>
      <div className={styles.accordianInfoItem}>
        <div>
          <input type='checkbox' className={styles.checkBox} />
        </div>
        <p style={{ fontWeight: 700 }}> CUSTOMISE </p>
      </div>
      <div className={styles.underline}> </div>

      {filtersList?.map((item, ind) => {
        return (
          <div key={ind}>
            <FilterAccordian title={item} data={filtersData[item]} />
            <div className={styles.underline}> </div>
          </div>
        );
      })}
    </article>
  );
}

export default Desktop;
