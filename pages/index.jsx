// pages/index.js
import React, { useEffect } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Image from 'next/image';
import styles from '../styles/style.module.css';
import { gsap } from 'gsap';

const animateLinks = () => {
  // Animation implement on resume project and contact circles
  gsap.from(['.resume-link', '.projects-link', '.contact-link'], {
    opacity: 0,
    duration: 2.5,
    ease: "elastic.inOut(1,0.5)",
    y: -250
  });
  // Animation implement on profile 
  gsap.from(['.profile-image'], {
    opacity: 0,
    duration: 2.5,
    ease: "elastic.inOut(1,0.5)",
    x: -250
  })
  // Animation implement on content
  gsap.from(['.profile-content'], {
    opacity: 0,
    duration: 2.5,
    ease: "elastic.inOut(1,0.5)",
    x: 250
  })
};

const HomePage = () => {
  useEffect(() => {
    animateLinks();
  }, []);

  return (
    <div>
      <Header />
      <div className={styles.mainContent}>
        <div className={styles.box}>
          <Image
            className={`${styles.roundedImage} profile-image`}
            src="/images/Urmil.png"
            width={380}
            height={380}
            alt="profile-pic"
          />
          <div className={styles.boxContent}>
            <div className={`${styles.hello} profile-content`}>
              <p>Hello</p>
            </div>
            <div className={`${styles.about} profile-content`}>
              <p>A bit about me</p>
            </div>
            <div className={`${styles.content} profile-content`}>
              <p>
                I'm a software engineer. Click here to add your own text and
                edit me. I’m a great place for you to tell a story and let your
                users know a little more about you.
              </p>
            </div>
            <div className={styles.roundElements}>
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
