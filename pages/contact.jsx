import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/contactUs.module.css';

const ContactPage = () => {
  return (
    <div className="flex flex-col">
      <Header />
      <main className="flex flex-grow justify-start bg-gray-100">
        <div className={`${styles.contactSection} rounded-lg p-8 w-full max-w-7xl`}>
          <div className={`${styles.contactBox} mb-8`}>
            <div className={styles.contactContent}>
              <div className={`${styles.contactHeading} text-3xl font-bold mb-2`}>Contact</div>
              <div className={`${styles.contactSubheading} text-lg text-gray-600`}>
                Looking forward to hearing from you
              </div>
              <div className={`${styles.contactInfoHeading} mt-4 text-xl font-semibold`}>Phone</div>
              <div className={`${styles.contactInfo} text-gray-700`}>+91-9638881667</div>
              <div className={`${styles.contactInfoHeading} mt-4 text-xl font-semibold`}>Email</div>
              <div className={`${styles.contactInfo} text-gray-700`}>urmilparsaniya4@gmail.com</div>
            </div>
          </div>
          <form className="space-y-6">
            <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0">
              <div className={styles.contactDetail}>
                <div className={styles.firstName}>
                  <label htmlFor="firstName" className="block text-gray-700">First Name</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    className="mt-1 p-2 w-full border border-gray-300 rounded"
                  />
                </div>
                <div className={styles.lastName}>
                  <label htmlFor="lastName" className="block text-gray-700">Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    className="mt-1 p-2 w-full border border-gray-300 rounded"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0">
              <div className={styles.contactDetail}>
                <div className={styles.email}>
                  <label htmlFor="email" className="block text-gray-700">Email Address *</label>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    className="mt-1 p-2 w-full border border-gray-300 rounded"
                    required
                  />
                </div>
                <div className={styles.subject}>
                  <label htmlFor="subject" className="block text-gray-700">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="mt-1 p-2 w-full border border-gray-300 rounded"
                  />
                </div>
              </div>
            </div>
            <div className={styles.contactDetail}>
              <div className={styles.message}>
                <label htmlFor="message" className="block text-gray-700">Message</label>
                <textarea
                  id="message"
                  name="message"
                  className="mt-1 p-2 w-full border rounded bg-transparent border-gray-300 rounded"
                />
              </div>
              <div className={styles.submit}>
                <button
                  type="submit"
                  className={`${styles.submitButton} bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600`}
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
