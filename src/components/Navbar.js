import React, { useState } from 'react';
import { Link } from 'react-scroll';  // Import Link from react-scroll
import './Navbar.css';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false); // State to toggle menu visibility

    const toggleMenu = () => {
        setMenuOpen(prev => !prev); // Toggle the menu state
    };

    return (
        <nav className="navbar">
            <div className="logo">WebWhiz._</div>
            <div className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <ul className={`nav-links ${menuOpen ? 'show' : ''}`}>
                <li>
                    <Link
                        to="home"
                        smooth={true}
                        duration={500}
                        offset={-70}
                        onClick={() => setMenuOpen(false)} // Close menu on link click
                    >
                        home
                    </Link>
                </li>
                <li>
                    <Link
                        to="about"
                        smooth={true}
                        duration={500}
                        offset={-70}
                        onClick={() => setMenuOpen(false)} // Close menu on link click
                    >
                        about me
                    </Link>
                </li>
                <li>
                    <Link
                        to="projects"
                        smooth={true}
                        duration={500}
                        offset={-70}
                        onClick={() => setMenuOpen(false)} // Close menu on link click
                    >
                        projects
                    </Link>
                </li>
                <li>
                    <Link
                        to="contact"
                        smooth={true}
                        duration={500}
                        offset={-70}
                        onClick={() => setMenuOpen(false)} // Close menu on link click
                    >
                        contact
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
