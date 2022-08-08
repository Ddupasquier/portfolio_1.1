import React from 'react';
import * as SiIcon from 'react-icons/si';
import * as AiIcon from 'react-icons/ai';
import Resume from '../assets/Dylan Dupasquier-Resume-Revised-4-28.pdf';
// import Navigation from './Navigation';

function SocialLinks() {
  return (
    <div id="social-links">
      <a
        href="https://www.linkedin.com/in/dylan-dupasquier/"
        target="_blank"
        className="each-social"
        rel="noreferrer"
      >
        <SiIcon.SiLinkedin />
      </a>
      <a
        href="https://github.com/Ddupasquier"
        target="_blank"
        className="each-social"
        rel="noreferrer"
      >
        <AiIcon.AiOutlineGithub />
      </a>
      <a
        href={Resume}
        target="_blank"
        rel="noopener noreferrer"
        className="each-social"
      >
        <AiIcon.AiFillFilePdf />
      </a>
      <br />
      {/* <Navigation /> */}
    </div>
  );
}

export default SocialLinks;
