import React from 'react';
import * as SiIcon from 'react-icons/si';
import * as AiIcon from 'react-icons/ai';
import Resume from '../assets/Dylan Dupasquier-Resume-Revised-4-28.pdf';

function SocialLinks() {
  return (
    <div id="social-links">
      <button
        type="button"
        className="linkedin"
        onClick={() => {
          window.open(
            'https://www.linkedin.com/in/dylan-dupasquier/',
            '_blank',
          );
        }}
      >
        <SiIcon.SiLinkedin />
      </button>
      <button
        type="button"
        className="github"
        onClick={() => {
          window.open('https://github.com/Ddupasquier', '_blank');
        }}
      >
        <AiIcon.AiOutlineGithub />
      </button>
      <a href={Resume} download>
        <AiIcon.AiFillFilePdf />
      </a>
    </div>
  );
}

export default SocialLinks;
