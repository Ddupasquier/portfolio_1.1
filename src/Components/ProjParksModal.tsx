/* eslint-disable react/function-component-definition */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import '../sass/modals.css';
import NationalParks from '../assets/nationalpark.gif';

interface Props {
  onClose: () => void;
}

const ProjParksModal: React.FC<Props> = ({ onClose }) => (
  <div className="overlay">
    <div className="modal">
      <header>
        <h3>National Parks</h3>
        <button type="button" onClick={onClose}>
          X
        </button>
      </header>
      <br />
      <img src={NationalParks} alt="styles" />
      <br />
      <a
        href="https://national-parks-fi.herokuapp.com/"
        target="_blank"
        rel="noreferrer"
      >
        Live
      </a>{' '}
      |{' '}
      <a
        href="https://github.com/Ddupasquier/phase-4-project-mincho-dylandupasquier"
        target="_blank"
        rel="noreferrer"
      >
        Github
      </a>
      <br />
      <b>TECH: React.js, Ruby on Rails, HTML5, CSS, BCrypt</b>
      <p>
        The National Parks app was created for my phase 4 project at Flatiron
        School. The purpose of this app is to allow users to look up national
        parks of the US and read information pertaining to them. This is
        intended as a proof-of-concept for a trip planning application.
      </p>
    </div>
  </div>
);

export default ProjParksModal;
