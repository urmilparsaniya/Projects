// pages/index.js
import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Image from 'next/image';
import styles from '../styles/style.module.css';

const HomePage = () => {
  return (
    <div>
      <Header />
      <div className={styles.mainContent}>
        <div className={styles.box}>
          <Image
            className={styles.roundedImage}
            src="/images/Urmil.png"
            width={380}
            height={380}
            alt="profile-pic"
          />
          <div className={styles.boxContent}>
            <div className={styles.hello}>
              <p>Hello</p>
            </div>
            <div className={styles.about}>
              <p>A bit about me</p>
            </div>
            <div className={styles.content}>
              <p>
                I'm a software engineer. Click here to add your own text and
                edit me. I’m a great place for you to tell a story and let your
                users know a little more about you.
              </p>
            </div>
            <div className={styles.roundElements}>
              <a
                href="#"
                className={`${styles.roundElement} ${styles.roundElementFirst}`}
              >
                Resume
              </a>
              <a
                href="/projects"
                className={`${styles.roundElement} ${styles.roundElementSecond}`}
              >
                Projects
              </a>
              <a
                href="/contact"
                className={`${styles.roundElement} ${styles.roundElementThird}`}
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
