import { CiSearch, CiShoppingCart } from 'react-icons/ci';
import { RxHamburgerMenu } from 'react-icons/rx';
import { MdFavoriteBorder } from 'react-icons/md';
import styles from '../styles/navbar.module.css';

function Navbar() {
  return (
    <div className={styles.navbarContainer}>
      <div className={styles.navChild}>
        <p>
          <RxHamburgerMenu />
        </p>
        <p>
          <RxHamburgerMenu />
        </p>
      </div>
      <h1> LOGO </h1>
      <div className={styles.navChild}>
        <p>
          <CiSearch />
        </p>
        <p>
          <MdFavoriteBorder />
        </p>
        <p>
          <CiShoppingCart />
        </p>
      </div>
    </div>
  );
}

export default Navbar;
