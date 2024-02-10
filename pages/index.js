// pages/index.js
import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

const HomePage = () => {
  return (
    <div>
      <Header />
      <h1>Welcome to my Next.js project!</h1>
      <p>This is the homepage.</p>
      <Footer />
    </div>
  );
};

export default HomePage;
