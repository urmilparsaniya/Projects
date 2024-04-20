import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/contactUs.module.css';

const ContactPage = () => {
  return (
    <div>
      <Header />
      <div className={styles.contactSection}>
        <div className={styles.contactBox}>
          <div className={styles.contactContent}>
            <div className={styles.contactHeading}>Contact</div>
            <div className={styles.contactSubheading}>
              Looking forward to hearing from you
            </div>
            <div className={styles.contactInfoHeading}>Phone</div>
            <div className={styles.contactInfo}>+91-9638881667</div>
            <div className={styles.contactInfoHeading}>Email</div>
            <div className={styles.contactInfo}>urmilparsaniya4@gmail.com</div>
          </div>
        </div>
        <div className={styles.contactDetailMain}>
          <div className={styles.contactDetail}>
            <div className={styles.firstName}>
              <label htmlFor="firstName">First Name</label>
              <input type="text" id="firstName" name="firstName" />
            </div>
            <div className={styles.lastName}>
              <label htmlFor="lastName">Last Name</label>
              <input type="text" id="lastName" name="lastName" />
            </div>
          </div>
          <div className={styles.contactDetail}>
            <div className={styles.email}>
              <label htmlFor="email">Email Address *</label>
              <input type="text" id="email" name="email" required />
            </div>
            <div className={styles.subject}>
              <label htmlFor="subject">Subject</label>
              <input type="text" id="subject" name="subject" />
            </div>
          </div>
          <div className={styles.contactDetail}>
            <div className={styles.message}>
              <label htmlFor="message">Message</label>
              <input type="text" id="message" name="message" />
            </div>
            <div className={styles.submit}>
              <button type="submit" className={styles.submitButton}>
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;
