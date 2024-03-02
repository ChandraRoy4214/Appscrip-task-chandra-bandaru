import { CiSearch, CiShoppingCart } from 'react-icons/ci';
import { RxHamburgerMenu } from 'react-icons/rx';
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md';
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
          {/* <div>
            <Image src={logo} alt={'logo'} width={'24px'} height={'24px'} />
          </div> */}
        </div>
      </div>
      <h1> LOGO </h1>
      <div className={styles.navChild}>
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
      </div>
    </div>
  );
}

export default Navbar;
