// pages/ResumePage.js
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ResumePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 bg-gray-100 flex items-center justify-center">
        {' '}
        {/* Center the main content */}
        <div className="container max-w-4xl mx-auto py-8 p-6 rounded-lg">
          {/* Resume Title Section */}
          <div className="flex mb-8">
            <div className="w-1/4 text-left flex flex-col p-6 rounded-md">
              <h1 className="text-4xl font-bold">Resume</h1>
            </div>
            <div className="w-3/4"></div>
          </div>

          {/* Work Experience Section */}
          <div className="flex mb-8">
            <div className="w-1/4 text-left flex flex-col p-6 rounded-md">
              <h3 className="text-lg font-bold">Work Experience</h3>
            </div>
            <div className="flex flex-wrap gap-4 justify-end">
              <div className="w-3/4 flex flex-col p-6 rounded-md">
                <div className="text-gray-600">2022 - Present</div>
                <div className="font-bold text-xl">Backend Developer</div>
                <p className="text-gray-700 mt-2">
                  As a Backend Developer, I specialize in creating robust and
                  scalable server-side applications. My role involves designing
                  and implementing APIs, managing databases, and ensuring that
                  our services are efficient and reliable. I work closely with
                  frontend developers to integrate user-facing elements with
                  server-side logic, and I'm constantly optimizing our systems
                  for performance and scalability.
                </p>
              </div>
            </div>
          </div>

          {/* Education Section */}
          <div className="flex mb-8">
            <div className="w-1/4 text-left flex flex-col p-6 rounded-md">
              <h3 className="text-lg font-bold">Education</h3>
            </div>
            <div className="flex flex-wrap gap-4 justify-end">
              <div className="w-3/4 flex flex-col p-6 rounded-md">
                <div className="text-gray-600">2017 - 2020</div>
                <div className="font-bold text-xl">
                  Atmiya institute of engineering | Diploma Degree
                </div>
                <p className="text-gray-700 mt-2">
                  During my time at Atmiya Institute of Engineering, I pursued a
                  Diploma in Computer Engineering. The coursework provided a
                  strong foundation in various aspects of computer science,
                  including programming, data structures, and algorithms. I
                  gained hands-on experience
                </p>
              </div>
              <div className="w-3/4 flex flex-col p-6 rounded-md">
                <div className="text-gray-600">2020 - 2022</div>
                <div className="font-bold text-xl">
                  Darshan institute of engineering | Bachelor's Degree
                </div>
                <p className="text-gray-700 mt-2">
                  At Darshan Institute of Engineering, I completed my Bachelor's
                  degree in Computer Engineering. This advanced program deepened
                  my understanding of software development, system design, and
                  modern technologies.
                </p>
              </div>
            </div>
          </div>

          {/* Skills & Expertise Section */}
          <div className="flex mb-8">
            <div className="w-1/3 text-left flex flex-col p-6 rounded-md">
              <h3 className="text-lg font-bold">Skills & Expertise</h3>
            </div>
            <div className="flex flex-wrap justify-end">
              <div className="w-1/4 flex flex-col p-6 rounded-md">
                <ul className="list-disc">
                  <li>NodeJS</li>
                  <li>Express</li>
                  <li>NextJS</li>
                  <li>HTML</li>
                  <li>SQL</li>
                  <li>JavaScript</li>
                  <li>TypeScript</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ResumePage;
