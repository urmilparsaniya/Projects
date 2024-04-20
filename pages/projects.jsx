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
        <div className={styles.projectContainer}>
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
          <div className={styles.project1Box}>
            <div>
              <p className={styles.project1Name}> SGC Duka </p>
              <p className={styles.projectDescription}>
                SGC Duka is a comprehensive retail outlet that strives to
                provide customers with an extensive selection of essential
                household and personal items conveniently located under a single
                roof. Our store is stocked with a diverse range of home utility
                products, including groceries, toiletries, beauty essentials,
                clothing, kitchenware, bedding, bath linen, home appliances, and
                much more. We are committed to offering our customers
                high-quality products at competitive prices, ensuring that they
                receive excellent value with every purchase. Our primary goal is
                to meet the diverse needs of our customers by providing them
                with a seamless shopping experience and access to a wide array
                of goods at affordable prices.
              </p>
            </div>
            <div className={styles.imageContainer}>
              <Image
                className={styles.project1Image}
                src="/images/SGC.webp"
                width={200}
                height={200}
                alt="projectImage"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default projectPage;
