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
          <a href='/' className={styles.myName}>Urmil Parsaniya</a>
        </li>
        <li className={styles.endItemsContainer}>
          <ul>
            <li><Link href="/contact" className={styles.navLink}>Contact</Link></li>
            <li><Link href="/projects" className={styles.navLink}>Projects</Link></li>
            <li><Link href="/" className={styles.navLink}>Resume</Link></li>
          </ul>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
