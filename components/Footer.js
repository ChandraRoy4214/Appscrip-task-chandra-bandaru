import styles from '../styles/footer.module.css';
import Accordian from './Accordian';
import { LiaSquareFullSolid } from 'react-icons/lia';

function Footer() {
  return (
    <footer className={styles.footerContainer}>
      <h3>BE THE FIRST TO KNOW</h3>
      <p className={styles.footerText}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. this is simply dummy text.
      </p>

      <div className={styles.newsLetter}>
        <input
          className={styles.inputBox}
          placeholder='Enter your e-mail...'
          type='text'
        />
        <button className={styles.button}> SUBSCRIBE </button>
      </div>

      <div className={styles.underline}> </div>

      <div>
        <h1> CALL US </h1>

        <div className={styles.contactUs}>
          <p> +44 221 133 5360 </p>

          <p style={{ rotate: '45deg', marginTop: '2px', marginLeft: '10px' }}>
            <LiaSquareFullSolid />
          </p>
          <p> customercare@mettamuse.com </p>
        </div>
      </div>

      <div className={styles.underline}> </div>

      <div>
        <h1> CURRENCY </h1>

        <div className={styles.contactUs}>
          <p> +44 221 133 5360 </p>
          <p> USA </p>
        </div>
      </div>

      <div className={styles.underline2}> </div>

      <Accordian title={'mettā muse'} />
      <div className={styles.underline}> </div>
      <Accordian title={'QUICK LINKS'} />
      <div className={styles.underline}> </div>
      <Accordian title={'FOLLOW US'} />
      <div className={styles.underline}> </div>

      <p style={{ textAlign: 'center' }}>
        {' '}
        Copyright © 2023 mettamuse. All rights reserved.{' '}
      </p>
    </footer>
  );
}

export default Footer;
