import { CiSearch, CiShoppingCart } from 'react-icons/ci';
import { RxHamburgerMenu } from 'react-icons/rx';
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md';
import { BsPersonFill } from 'react-icons/bs';
import { MdKeyboardArrowDown } from 'react-icons/md';
import styles from '../styles/navbar.module.css';
import Image from 'next/image';
import logo from '../public/Images/logo.png';

function Navbar({ showFavourites, setShowFavourites }) {
  return (
    <div className={styles.navbarContainer}>
      <div className={styles.navChild}>
        <p className={styles.hamburger}>
          <RxHamburgerMenu />
        </p>
        <div className={styles.logoContainer}>
          <div>
            <Image src={logo} alt={'logo'} width={24} height={24} />
          </div>
        </div>
      </div>
      <h1 className={styles.logoText}> LOGO </h1>
      <div className={styles.navChild} style={{ justifyContent: 'flex-end' }}>
        <p>
          <CiSearch />
        </p>
        <p
          onClick={() => {
            setShowFavourites((prev) => !prev);
          }}
        >
          {showFavourites ? (
            <span style={{ color: 'red' }}>
              <MdFavorite />
            </span>
          ) : (
            <MdFavoriteBorder />
          )}
        </p>

        <p>
          <CiShoppingCart />
        </p>

        <div className={styles.desktopOptions}>
          <p style={{ fontSize: '23px' }}>
            <BsPersonFill />
          </p>

          <div className={styles.recommend}>
            <p style={{ textTransform: 'uppercase', textAlign: 'center' }}>
              ENG
            </p>
            <p
              style={{
                paddingTop: '7px',
                fontSize: '24px',
              }}
            >
              <MdKeyboardArrowDown />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
