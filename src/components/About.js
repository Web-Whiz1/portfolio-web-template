import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const AboutMe = () => {
  return (
    <section className="about" id="about">
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="about-heading"
      >
        About Me
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="about-description"
      >
        I am a passionate Full-Stack Developer with a knack for creating modern and efficient web applications. 
        My skills include working with various technologies and frameworks to bring innovative solutions to life.
      </motion.p>

      <motion.div
        className="about-content"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h3>Skills & Technologies:</h3>
        <ul className="skills-list">
          <li>JavaScript</li>
          <li>React</li>
          <li>Node.js</li>
          <li>HTML & CSS</li>
          <li>Git & GitHub</li>
        </ul>
      </motion.div>
    </section>
  );
};

export default AboutMe;
