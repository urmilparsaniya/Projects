import React from 'react';
import styles from '../styles/footer.module.css';
// import image from '../public/images/LinkedIn.png'

const Footer = () => (
  <footer className={styles.footer}>
    {/* <hr className={styles.separator} /> */}
    <div className={styles.contactInfo}>
      <h3>Phone number:</h3>
      <p>+91-9638881667</p>
    </div>
    <div className={styles.contactInfo}>
      <h3>Email:</h3>
      <p>urmilparsaniya4@gmail.com</p>
    </div>
    <div className={styles.followMe}>
      <h3>Follow me:</h3>
      <div className={styles.socialIcons}>
        <a href="https://www.linkedin.com/in/urmil-parsaniya/"><img src="/images/LinkedIn.png" alt="LinkedIn" /></a>
      </div>
    </div>
    <div className={styles.copyRight}>
      <p>&copy; 2035 Urmil parsaniya <br /> All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
