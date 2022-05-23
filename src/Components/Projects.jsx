/* eslint-disable react/jsx-no-bind */
import React, { useState } from 'react';
import SimpleStyleBg from '../assets/simplestylepause.png';
import PokedexBg from '../assets/pokedexpause.png';
import NationalParkBg from '../assets/nationalparkpause.png';
import ProjSSModal from './ProjSSModal.tsx';
import ProjDexModal from './ProjDexModal.tsx';
import ProjParksModal from './ProjParksModal.tsx';

function Projects() {
  const [showStyles, setShowStyles] = useState(false);
  const [showDex, setShowDex] = useState(false);
  const [showParks, setShowParks] = useState(false);

  function handleOpenStyles() {
    setShowStyles(true);
  }

  function handleCloseStyles() {
    setShowStyles(false);
  }

  function handleOpenDex() {
    setShowDex(true);
  }

  function handleCloseDex() {
    setShowDex(false);
  }

  function handleOpenParks() {
    setShowParks(true);
  }

  function handleCloseParks() {
    setShowParks(false);
  }

  return (
    <div id="projects">
      <div
        style={{ backgroundImage: `url(${SimpleStyleBg})` }}
        className="proj proj-one"
      >
        <div className="proj-title">SIMPLE STYLES</div>
        <div className="proj-tech">
          TECH: React.js, Ruby on Rails, CSS3, HTML5, BCrypt
        </div>
        <button
          type="button"
          className="proj-button"
          onClick={handleOpenStyles}
        >
          More
          <br />
          Info
        </button>
      </div>

      <div
        style={{ backgroundImage: `url(${PokedexBg})` }}
        className="proj proj-two"
      >
        <div className="proj-title">PokeDex</div>
        <div className="proj-tech">TECH: VanillaJs, Html5, CSS3</div>
        <button type="button" className="proj-button" onClick={handleOpenDex}>
          More
          <br />
          Info
        </button>
      </div>

      <div
        style={{ backgroundImage: `url(${NationalParkBg})` }}
        className="proj proj-three"
      >
        <div className="proj-title">National Parks</div>
        <div className="proj-tech">
          TECH: React.js, Ruby on Rails, CSS3, HTML5, BCrypt
        </div>
        <button type="button" className="proj-button" onClick={handleOpenParks}>
          More
          <br />
          Info
        </button>
      </div>
      {showStyles ? <ProjSSModal onClose={handleCloseStyles} /> : null}
      {showDex ? <ProjDexModal onClose={handleCloseDex} /> : null}
      {showParks ? <ProjParksModal onClose={handleCloseParks} /> : null}
    </div>
  );
}

export default Projects;
