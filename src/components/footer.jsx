// src/components/Footer.js
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <div className="left-content">
        <p class='text-light'>
          Embrace the power of our app and unlock the secrets of the universe, one quiz at a time.
          As I always say, "Yesterday is history, tomorrow is a mystery, but today is a gift.
          That is why it is called the present."
        </p>
      </div>
      <div className="right-content">
        <Link to="/">Home</Link>
        <Link to="/account">Account</Link>
        <Link to="/quiz-generation">Quiz Generator</Link>
      </div>
    </footer>
  );
};

export default Footer;
