/* eslint-disable react/function-component-definition */
/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import '../sass/modals.css';
import PokeDex from '../assets/pokedex1.0.gif';

interface Props {
  onClose: () => void;
}

const ProjDexModal: React.FC<Props> = ({ onClose }) => (
  <div className="overlay">
    <div className="modal">
      <header>
        <h3>PokeDex 1.0</h3>
        <button type="button" onClick={onClose}>
          X
        </button>
      </header>
      <br />
      <img src={PokeDex} alt="styles" />
      <br />
      <a
        href="https://pokedex-fi.herokuapp.com/"
        target="_blank"
        rel="noreferrer"
      >
        Live
      </a>{' '}
      |{' '}
      <a
        href="https://github.com/Ddupasquier/Pokedex-1.0"
        target="_blank"
        rel="noreferrer"
      >
        Github
      </a>
      <br />
      <b>TECH: VanilaJS, HTML5, CSS3</b>
      <p>
        This PokeDex app was created for my phase 1 project for Flatiron School.
        It is a vanilla JS and CSS application, designed to allow the user to
        read about the first 151 Pokemon.
      </p>
    </div>
  </div>
);

export default ProjDexModal;
