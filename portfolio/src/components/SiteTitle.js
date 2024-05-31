// components/SiteTitle.js

import React from 'react';
import './SiteTitle.css';  // Import the CSS file
import AnimatedButton from './AnimatedButton';
import './AboutMe.css';

const SiteTitle = () => {
  return (
    <header className="header">
    <h1 className="site-title">Loris Reggiani</h1>
    <div className="intro">
        <div className="about-me-content">
            <h3>Current Status</h3>
            <p>I am currently a <span className="highlight">Computer Science Student at EPITECH</span>.</p>
            
            <h3>Key Skills</h3>
            <p>I specialize in several programming languages and technologies, including <span className="highlight">C, C++, Python, Swift, JavaScript, Node.js, React.js, HTML, CSS, PHP, MySQL, MongoDB</span>, and tools such as <span className="highlight">Git, GitHub, Docker, Unix/Linux Shell</span>.</p>
            
            <h3>Interests</h3>
            <p>Within computer science, I am particularly interested in <span className="highlight">resolving complex problems and innovating with technology</span>.</p>
            
            <h3>Goals</h3>
            <p>Short-term, I plan to <span className="highlight">continue developing my portfolio</span>. Long-term, I hope to <span className="highlight">engage in projects that allow me to further develop and apply my programming skills</span>.</p>
        </div>
    <AnimatedButton text="My Resume" />
    </div>
    </header>
  );
}

export default SiteTitle;
