import React from 'react';
import * as SiIcon from 'react-icons/si';
import * as AiIcon from 'react-icons/ai';
import Resume from '../assets/Dylan Dupasquier-Resume-Revised-4-28.pdf';

function SocialLinks() {
  return (
    <div id="social-links">
      <a
        href="https://www.linkedin.com/in/dylan-dupasquier/"
        target="_blank"
        className="linkedin"
        rel="noreferrer"
      >
        <SiIcon.SiLinkedin />
      </a>
      <a
        href="https://github.com/Ddupasquier"
        target="_blank"
        className="linkedin"
        rel="noreferrer"
      >
        <AiIcon.AiOutlineGithub />
      </a>
      <a href={Resume} target="_blank" rel="noopener noreferrer">
        <AiIcon.AiFillFilePdf />
      </a>
    </div>
  );
}

export default SocialLinks;
