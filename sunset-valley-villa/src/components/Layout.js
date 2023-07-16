import Head from 'next/head';
import styles from '../styles/components/Layout.module.css';
import Link from 'next/link';
import Navbar from './Navbar';

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
    
      <Head>
        <title>Sunset Valley Villa</title>
      </Head>

      <Navbar />

      <main className={styles.main}>{children}</main>

      <footer className={styles.footer}>
        <p>&copy; {new Date().getFullYear()} Villa Paradise. All rights reserved.</p>
      </footer>

    </div>
  );
};

export default Layout;
