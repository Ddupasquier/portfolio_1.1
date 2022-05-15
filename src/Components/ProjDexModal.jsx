/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import '../sass/modals.css';
import PropTypes from 'prop-types';
import PokeDex from '../assets/pokedex1.0.gif';

function ProjDexModal({ onClose }) {
  return (
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
        <b>TECH: VannilaJS, HTML5, CSS3</b>
        <p>
          This PokeDex app was created for my phase 1 project for Flatiron
          School. It is a vanilla JS and CSS application, designed to allow the
          user to read about the first 151 Pokemon.
        </p>
      </div>
    </div>
  );
}

ProjDexModal.propTypes = {
  // eslint-disable-next-line react/require-default-props
  onClose: PropTypes.func,
};

export default ProjDexModal;
