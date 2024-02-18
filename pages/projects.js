import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/projects.module.css';
import Image from 'next/image';

const projectPage = () => {
  return (
    <div>
      <Header />
      <div className={styles.projectSection}>
        <div className={styles.projectBox}>
          <p className={styles.project}>Projects</p>
        </div>
        <div className={styles.project1Box}>
          <div>
            <p className={styles.project1Name}> NFT Up </p>
            <p className={styles.projectDescription}>
              NFTup application is the provider that allows you to mint on the
              major blockchains directly from your phone
            </p>
          </div>
          <div className={styles.imageContainer}>
            <Image
              className={styles.project1Image}
              src="/images/NFTUp.webp"
              width={200}
              height={200}
              alt="projectImage"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default projectPage;
