import React from 'react';
import * as SiIcon from 'react-icons/si';
import * as AiIcon from 'react-icons/ai';

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
    </div>
  );
}

export default SocialLinks;
