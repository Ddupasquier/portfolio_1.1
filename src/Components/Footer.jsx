/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';

function Footer() {
  return (
    <footer>
      <span>Portfolio of Dylan Dupasquier | Full Stack Developer</span>
      <br />
      <span>
        <b>
          Technologies used for this portfolio are React.js, SCSS, tsParticles,
          and email.js
        </b>
      </span>
      <br />
      <span>Copyright {new Date().getFullYear()} | All Rights Reserved</span>
    </footer>
  );
}

export default Footer;
