import styles from '../styles/components/Navbar.module.css';
import Link from 'next/link'

function Navbar() {
  return (
      <header className={styles.header}>

        <nav className={styles.navbar}>

          <div className={styles.navTitle}>
            <Link href="/">Sunset Valley Villa</Link>
          </div>

          <div className={styles.navList}>
            <div className={styles.navLinkContainer}>
              <Link href="/thevilla">The Villa</Link>
            </div>
            <div className={styles.navLinkContainer}>
              <Link href="/thearea">The Area</Link>
            </div>
            <div className={styles.navLinkContainer}>
              <Link href="/gallery">Gallery</Link>
            </div>
            <div className={styles.navLinkContainer}>
              <Link href="/contact">Contact</Link>
            </div>
          </div>

        </nav>

      </header>

  );
};

export default Navbar;