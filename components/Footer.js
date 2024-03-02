import { QUICK_LINKS, METTA_MUSE } from '../enums';
import styles from '../styles/footer.module.css';
import Accordian from './Accordian';
import { LiaSquareFullSolid } from 'react-icons/lia';
import { IoLogoInstagram, IoLogoLinkedin } from 'react-icons/io5';
import Image from 'next/image';
import amex from '../public/Images/amex.png';
import gpay from '../public/Images/gpay.png';
import ipay from '../public/Images/ipay.png';
import opay from '../public/Images/opay.png';
import paypal from '../public/Images/paypal.png';

function Footer() {
  return (
    <footer className={styles.footerContainer}>
      <section className={styles.footerSection}>
        <div className={styles.footerLeft}>
          <div>
            <h3>BE THE FIRST TO KNOW</h3>
            <p className={styles.footerText}>
              Sign up for updates from mettā muse.
            </p>
          </div>

          <div className={styles.newsLetter}>
            <input
              className={styles.inputBox}
              placeholder='Enter your e-mail...'
              type='text'
            />
            <button className={styles.button}> SUBSCRIBE </button>
          </div>
        </div>
        <div className={styles.footerRight}>
          <h2> CONTACT US </h2>
          <p> +44 221 133 5360 </p>
          <p> customercare@mettamuse.com </p>

          <h2> CURRENCY </h2>
          <h3> USD </h3>

          <p style={{ fontSize: '12px' }}>
            Transactions will be completed in Euros and a currency reference is
            available on hover.
          </p>
        </div>
      </section>

      <div className={styles.underline}> </div>

      <section className={styles.footerSection2}>
        <div>
          <h1> CALL US </h1>

          <div className={styles.contactUs}>
            <p> +44 221 133 5360 </p>

            <p
              style={{ rotate: '45deg', marginTop: '2px', marginLeft: '10px' }}
            >
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

        <Accordian title={'mettā muse'} data={METTA_MUSE} />
        <div className={styles.underline}> </div>
        <Accordian title={'QUICK LINKS'} data={QUICK_LINKS} />
        <div className={styles.underline}> </div>
        <Accordian title={'FOLLOW US'} />
        <div className={styles.underline}> </div>
      </section>

      <section className={styles.linksSection}>
        <Links title={'mettā muse'} data={METTA_MUSE} />
        <Links title={'QUICK LINKS'} data={QUICK_LINKS} />

        <div>
          <h1> FOLLOW US </h1>
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

          <div className={styles.paymentsContainer}>
            <h3>mettā muse Accepts</h3>

            <PaymentTypes />
          </div>
        </div>
      </section>
      <div className={styles.paymentsContainer2}>
        <h3>mettā muse Accepts</h3>

        <PaymentTypes />
      </div>

      <p className={styles.copyRights}>
        {' '}
        Copyright © 2023 mettamuse. All rights reserved.{' '}
      </p>
    </footer>
  );
}

const Links = ({ title, data }) => {
  return (
    <div>
      <h2> {title} </h2>

      <div className={styles.links}>
        {data.map((item, ind) => {
          return (
            <p className={styles.link} key={ind}>
              {item}
            </p>
          );
        })}
      </div>
    </div>
  );
};

const PaymentTypes = () => {
  let images = [amex, gpay, ipay, opay, paypal];

  return (
    <div className={styles.paymentsLinks}>
      {images.map((item, ind) => {
        return (
          <div key={ind}>
            <Image src={item} alt={item} width={'56px'} height={'35px'} />{' '}
          </div>
        );
      })}
    </div>
  );
};

export default Footer;
