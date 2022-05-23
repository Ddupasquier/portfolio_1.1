/* eslint-disable react/function-component-definition */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import '../sass/modals.css';
import SimpleStyles from '../assets/simplestyles.gif';

interface Props {
  onClose: () => void;
}

const ProjSSModal: React.FC<Props> = ({ onClose }) => (
  <div className="overlay">
    <div className="modal">
      <header>
        <h3>SimpleStyles</h3>
        <button type="button" onClick={onClose}>
          X
        </button>
      </header>
      <br />
      <img src={SimpleStyles} alt="styles" />
      <br />
      <a
        href="https://simplestyles.herokuapp.com/"
        target="_blank"
        rel="noreferrer"
      >
        Live
      </a>{' '}
      |{' '}
      <a
        href="https://github.com/Ddupasquier/phase-5-cssreact-library"
        target="_blank"
        rel="noreferrer"
      >
        Github
      </a>
      <br />
      <b>TECH: React.js, Ruby on Rails, CSS3, HTML5, BCrypt</b>
      <p>
        The SimpleStyles app was created in order to exercise my ability to
        recreate components from Semantic UI, ReactBootstrap, and a few other
        sites just to see if I can do it. I've found that opting to not use
        these outside components has actually saved me a lot of time and
        hassle in the past, so I'm looking forward to having a repo set aside
        for myself that has unbroken code that wasn't written in 2018. No
        promises that I'm going to wow you, but I hope that what I'm able to
        produce is helpful to someone, someday.
      </p>
      <p>
        SimpleStyles is built to provide prebuilt, user friendly React
        components to ease developer workflow when building React apps. It
        allows for the easy search and use of common React components, saving
        significant development time.
      </p>
    </div>
  </div>
);

export default ProjSSModal;
