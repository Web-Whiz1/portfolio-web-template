import React from 'react';
import './Footer.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa'; // Importing icons

const Footer = () => {
  return (
    <footer className="footer">
      <p>© 2024 WebWhiz. All rights reserved.</p>
      <div className="social-icons">
        <a href="https://github.com/your-github" target="_blank" rel="noopener noreferrer" className="social-icon">
          <FaGithub />
        </a>
        <a href="https://linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer" className="social-icon">
          <FaLinkedin />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
