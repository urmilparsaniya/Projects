import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/projects.module.css'; // Custom CSS module
import Image from 'next/image';

const ProjectPage = () => {
  const [expandedProject, setExpandedProject] = useState(null);

  // Sample project data with descriptions
  const projects = [
    {
      name: 'NFT Up',
      description:
        'NFTup application is the provider that allows you to mint on the major blockchains directly from your phone.',
      imageSrc: '/images/NFTUp.webp',
    },
    {
      name: 'SGC Duka',
      description:
        'SGC Duka is a comprehensive retail outlet that strives to provide customers with an extensive selection of essential household and personal items conveniently located under a single roof. Our store is stocked with a diverse range of home utility products, including groceries, toiletries, beauty essentials, clothing, kitchenware, bedding, bath linen, home appliances, and much more. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod ultrices mi non blandit.',
      imageSrc: '/images/SGC.webp',
    },
  ];

  const handleProjectHover = (index) => {
    setExpandedProject(index);
  };

  const handleProjectLeave = () => {
    setExpandedProject(null);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 bg-gray-100">
        <div className="container mx-auto py-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold">Projects</h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="rounded-lg overflow-hidden shadow-lg">
                <div className="p-4 flex flex-col h-full">
                  <div>
                    <p className="text-xl font-bold">{project.name}</p>
                    {/* Description with read more effect */}
                    <div
                      className={`${styles.projectDescription} mt-2 ${
                        expandedProject === index ? styles.expanded : ''
                      }`}
                      onMouseEnter={() => handleProjectHover(index)}
                      onMouseLeave={handleProjectLeave}
                    >
                      {expandedProject === index ? project.description : `${project.description.slice(0, 100)}...`}
                    </div>
                  </div>
                  <div className="mt-4 flex justify-center">
                    <div className={styles.imageContainer}>
                      <Image
                        className={styles.projectImage} // Ensure projectImage class is defined
                        src={project.imageSrc}
                        width={200}
                        height={200}
                        alt="projectImage"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProjectPage;
