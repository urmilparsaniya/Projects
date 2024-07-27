import React, { useState } from 'react';
import Link from 'next/link';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="text-black">
      <nav className="container mx-auto p-7 flex justify-between items-center">
        <div className="flex items-center">
          <div className="w-5 h-5 bg-orange-500 rounded-full mr-2"></div>
          <a href='/' className="font-bold text-xl">Urmil Parsaniya</a>
        </div>
        <div className="block lg:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
            </svg>
          </button>
        </div>
        <ul className={`lg:flex lg:items-center lg:space-x-20 ${isOpen ? 'block' : 'hidden'} space-y-5 lg:space-y-0`}>
          <li>
            <Link href="/contact" className="block text-base hover:text-yellow-500">Contact</Link>
          </li>
          <li>
            <Link href="/projects" className="block text-base hover:text-yellow-500">Projects</Link>
          </li>
          <li className="mb-5 lg:mb-0">
            <Link href="/resume" className="block text-base hover:text-yellow-500">Resume</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
