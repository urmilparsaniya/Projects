// pages/ResumePage.js
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ResumePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 bg-gray-100 flex items-center justify-center"> {/* Center the main content */}
        <div className="container max-w-4xl mx-auto py-8 p-6 rounded-lg">
          {/* Resume Title Section */}
          <div className="flex mb-8">
            <div className="w-1/4 text-left">
              <h1 className="text-3xl font-bold">Resume</h1>
            </div>
            <div className="w-3/4"></div>
          </div>

          {/* Work Experience Section */}
          <div className="flex mb-8">
            <div className="w-1/4 text-left">
              <h3 className="text-lg font-bold">Work Experience</h3>
            </div>
            <div className="w-3/4">
              <ul className="list-disc ml-8">
                <li>Job Title - Company Name, Location (Date Range)</li>
                <li>Job Description...</li>
              </ul>
            </div>
          </div>

          {/* Education Section */}
          <div className="flex mb-8">
            <div className="w-1/4 text-left">
              <h3 className="text-lg font-bold">Education</h3>
            </div>
            <div className="w-3/4">
              <ul className="list-disc ml-8">
                <li>Degree - Institution Name, Location (Date Range)</li>
                <li>Coursework or Achievements...</li>
              </ul>
            </div>
          </div>

          {/* Skills & Expertise Section */}
          <div className="flex mb-8">
            <div className="w-1/4 text-left">
              <h3 className="text-lg font-bold">Skills & Expertise</h3>
            </div>
            <div className="w-3/4">
              <ul className="list-disc ml-8">
                <li>Skill 1, Skill 2, Skill 3</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ResumePage;
