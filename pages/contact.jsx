import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/contactUs.module.css';
import Swal from 'sweetalert2'; // Import SweetAlert2

const ContactPage = () => {
  const [formStatus, setFormStatus] = useState('');

  // Regular expression for email validation
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    // Validate email using regex
    const email = formData.get('email');
    if (!emailRegex.test(email)) {
      // Show error message using SweetAlert2
      Swal.fire({
        title: 'Error!',
        text: 'Please enter a valid email address.',
        icon: 'error',
        confirmButtonText: 'OK',
      });
      return;
    }

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
        },
        body: formData,
      });

      const result = await response.json();
      console.log(result);
      if (result.success) {
        // Show success message using SweetAlert2
        Swal.fire({
          title: 'Success!',
          text: 'Your message has been sent successfully.',
          icon: 'success',
          confirmButtonText: 'OK',
        });
        form.reset();
      } else {
        Swal.fire({
          title: 'Error!',
          text: 'Something went wrong. Please try again.',
          icon: 'error',
          confirmButtonText: 'OK',
        });
        return;
      }
    } catch (error) {
      Swal.fire({
        title: 'Error!',
        text: 'An error occurred. Please try again.',
        icon: 'error',
        confirmButtonText: 'OK',
      });
      return;
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-grow justify-start bg-gray-100">
        <div
          className={`${styles.contactSection} rounded-lg p-8 w-full max-w-7xl`}
        >
          <div className={`${styles.contactBox} mb-8`}>
            <div className={styles.contactContent}>
              <div
                className={`${styles.contactHeading} text-3xl font-bold mb-2`}
              >
                Contact
              </div>
              <div
                className={`${styles.contactSubheading} text-lg text-gray-600`}
              >
                Looking forward to hearing from you
              </div>
              <div
                className={`${styles.contactInfoHeading} mt-4 text-xl font-semibold`}
              >
                Phone
              </div>
              <div className={`${styles.contactInfo} text-gray-700`}>
                +91-9638881667
              </div>
              <div
                className={`${styles.contactInfoHeading} mt-4 text-xl font-semibold`}
              >
                Email
              </div>
              <div className={`${styles.contactInfo} text-gray-700`}>
                urmilparsaniya4@gmail.com
              </div>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              type="hidden"
              name="apikey"
              value="ca7bdcab-0236-4872-ad66-87acda206110"
            />
            <input
              type="hidden"
              name="subject"
              value="New Contact Form Submission"
            />
            <input
              type="checkbox"
              name="botcheck"
              id="botcheck"
              style={{ display: 'none' }}
            />

            <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0">
              <div className={styles.contactDetail}>
                <div className={styles.firstName}>
                  <label htmlFor="firstName" className="block text-gray-700">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    className="mt-1 p-2 w-full border border-gray-300 rounded"
                    placeholder="First Name"
                  />
                </div>
                <div className={styles.lastName}>
                  <label htmlFor="lastName" className="block text-gray-700">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    className="mt-1 p-2 w-full border border-gray-300 rounded"
                    placeholder="Last Name"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0">
              <div className={styles.contactDetail}>
                <div className={styles.email}>
                  <label htmlFor="email" className="block text-gray-700">
                    Email Address *
                  </label>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    className="mt-1 p-2 w-full border border-gray-300 rounded"
                    placeholder="Email"
                    required
                  />
                </div>
                <div className={styles.subject}>
                  <label htmlFor="subject" className="block text-gray-700">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="mt-1 p-2 w-full border border-gray-300 rounded"
                    placeholder="Subject"
                  />
                </div>
              </div>
            </div>
            <div className={styles.contactDetail}>
              <div className={styles.message}>
                <label htmlFor="message" className="block text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="mt-1 p-2 w-full border border-black rounded bg-transparent"
                  rows="3"
                  placeholder="Enter your message here..."
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
          {formStatus && <div className="mt-4 text-red-500">{formStatus}</div>}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
