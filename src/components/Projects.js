import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: 'Project 1',
      description: 'A brief description of Project 1.',
      details: 'Detailed information about Project 1...',
      githubLink: 'https://github.com/your-github/project1',
    },
    {
      title: 'Project 2',
      description: 'A brief description of Project 2.',
      details: 'Detailed information about Project 2...',
      githubLink: 'https://github.com/your-github/project2',
    },
    {
      title: 'Project 3',
      description: 'A brief description of Project 3.',
      details: 'Detailed information about Project 3...',
      githubLink: 'https://github.com/your-github/project3',
    },
  ];

  const handleCardClick = (project) => {
    setSelectedProject(project);
  };

  const handleClosePopup = () => {
    setSelectedProject(null);
  };

  return (
    <section className="projects" id="projects">
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="projects-heading"
      >
        My Projects
      </motion.h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="project-card"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
            onClick={() => handleCardClick(project)}
          >
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <FaGithub className="github-icon" />
          </motion.div>
        ))}
      </div>

      {selectedProject && (
        <div className="popup">
          <div className="popup-content">
            <h3>{selectedProject.title}</h3>
            <p>{selectedProject.details}</p>
            <a href={selectedProject.githubLink} target="_blank" rel="noopener noreferrer">
              <FaGithub className="github-icon" />
            </a>
            <button onClick={handleClosePopup}>Close</button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
