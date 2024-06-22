import React from 'react';

const Footer = () => (
  <footer className="py-8 px-4">
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-center">
      <div>
        <h3 className="text-lg font-semibold mb-2">Phone number:</h3>
        <p>+91-9638881667</p>
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-2">Email:</h3>
        <p>urmilparsaniya4@gmail.com</p>
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-2">Follow me:</h3>
        <div className="flex justify-center md:justify-center space-x-4">
          <a href="https://www.linkedin.com/in/urmil-parsaniya/">
            <img src="/images/LinkedIn.png" alt="LinkedIn" className="h-8 w-8" />
          </a>
        </div>
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-2"></h3>
        <p>&copy; 2035 Urmil Parsaniya <br /> All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
