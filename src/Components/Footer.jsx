import React, { useState } from 'react';
import * as SiIcon from 'react-icons/si';
import * as AiIcon from 'react-icons/ai';

function Footer() {
  const [show, setShow] = useState(true);

  function email() {
    window.location = 'mailto:dylandupasquier@gmail.com';
  }

  return (
    <div>
      {show === true ? (
        <footer className="open-animation">
          <button
            type="button"
            className="footer-arrow"
            onClick={() => {
              setShow(false);
            }}
          >
            <AiIcon.AiFillCaretDown />
          </button>

          <br />
          <span>Portfolio of Dylan Dupasquier | Full Stack Developer</span>
          <br />
          <span>Copyright 2022 | All Rights Reserved</span>
          <br />
          <span>Artwork by Jacob Smutko</span>
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
          <button type="button" to="#" className="email" onClick={email}>
            <AiIcon.AiOutlineMail />
          </button>
        </footer>
      ) : (
        <footer>
          <button
            type="button"
            className="footer-arrow"
            onClick={() => {
              setShow(true);
            }}
          >
            <AiIcon.AiFillCaretUp />
          </button>
        </footer>
      )}
    </div>
  );
}

export default Footer;
