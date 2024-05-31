// components/AnimatedButton.js

import React from 'react';
import './AnimatedButton.css';  // Import the CSS file

const AnimatedButton = ({ text }) => {
  return (
    <button className="animated-button">{text}</button>
  );
}

export default AnimatedButton;
