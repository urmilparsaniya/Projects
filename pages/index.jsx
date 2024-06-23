// pages/index.js
import React, { useEffect } from 'react';
import Head from 'next/head';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Image from 'next/image';
import styles from '../styles/style.module.css';
import { gsap } from 'gsap';

const animateLinks = () => {
  gsap.from(['.resume-link', '.projects-link', '.contact-link'], {
    opacity: 0,
    duration: 2.5,
    ease: "elastic.inOut(1,0.5)",
    y: -250
  });
  gsap.from(['.profile-image'], {
    opacity: 0,
    duration: 2.5,
    ease: "elastic.inOut(1,0.5)",
    x: -250
  });
  gsap.from(['.profile-content'], {
    opacity: 0,
    duration: 2.5,
    ease: "elastic.inOut(1,0.5)",
    x: 250
  });
};

const HomePage = () => {
  useEffect(() => {
    animateLinks();
  }, []);

  return (
    <>
      <Head>
        <title>Home - Urmil's Portfolio</title>
        <meta name="description" content="This is the homepage of Urmil's personal portfolio. Learn more about Urmil, a software engineer." />
        <meta name="keywords" content="Urmil, Software Engineer, Home, Portfolio" />
      </Head>
      <Header />
      <div className="flex flex-col items-center justify-center bg-gray-100 p-4">
        <div className="flex flex-col md:flex-row items-center rounded-lg p-6 md:p-10">
          <Image
            className="rounded-full profile-image"
            src="/images/Urmil.png"
            width={380}
            height={380}
            alt="Profile picture of Urmil"
          />
          <div className="flex flex-col items-center md:items-start mt-6 md:mt-0 md:ml-10 text-center md:text-left">
            <div className="text-2xl font-bold profile-content">
              <h1>Hello</h1>
            </div>
            <div className="text-xl font-medium mt-2 profile-content">
              <h2>A bit about me</h2>
            </div>
            <div className="mt-4 text-base profile-content">
              <p>
                I'm a software engineer. Click here to add your own text and
                edit me. I’m a great place for you to tell a story and let your
                users know a little more about you.
              </p>
            </div>
            <div className="flex space-x-4 mt-6">
              <a
                href="/resume"
                className={`${styles.roundElement} ${styles.roundElementFirst} resume-link`}
                aria-label="View my resume"
              >
                Resume
              </a>
              <a
                href="/projects"
                className={`${styles.roundElement} ${styles.roundElementSecond} projects-link`}
                aria-label="View my projects"
              >
                Projects
              </a>
              <a
                href="/contact"
                className={`${styles.roundElement} ${styles.roundElementThird} contact-link`}
                aria-label="Contact me"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
