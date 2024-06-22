// pages/index.js
import React, { useEffect } from 'react';
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
    <div>
      <Header />
      <div className="flex flex-col items-center justify-center bg-gray-100 p-4">
        <div className="flex flex-col md:flex-row items-center rounded-lg p-6 md:p-10">
          <Image
            className="rounded-full profile-image"
            src="/images/Urmil.png"
            width={380}
            height={380}
            alt="profile-pic"
          />
          <div className="flex flex-col items-center md:items-start mt-6 md:mt-0 md:ml-10 text-center md:text-left">
            <div className="text-2xl font-bold profile-content">
              <p>Hello</p>
            </div>
            <div className="text-xl font-medium mt-2 profile-content">
              <p>A bit about me</p>
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
              >
                Resume
              </a>
              <a
                href="/projects"
                className={`${styles.roundElement} ${styles.roundElementSecond} projects-link`}
              >
                Projects
              </a>
              <a
                href="/contact"
                className={`${styles.roundElement} ${styles.roundElementThird} contact-link`}
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
