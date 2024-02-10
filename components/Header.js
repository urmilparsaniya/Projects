// components/Header.js
import React from 'react';
import Link from 'next/link';
import styles from '../styles/header.module.css';

const Header = () => (
  <header className={styles.header}>
    <nav>
      <ul className={styles.navList}>
        <li className={styles.specialItem}>
          <div className={styles.orangeRound}></div>
          <span className={styles.myName}>Urmil Parsaniya</span>
        </li>
        <li className={styles.endItemsContainer}>
          <ul>
            <li><Link href="/" className={styles.navLink}>Contact</Link></li>
            <li><Link href="/" className={styles.navLink}>Projects</Link></li>
            <li><Link href="/" className={styles.navLink}>Resume</Link></li>
          </ul>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
