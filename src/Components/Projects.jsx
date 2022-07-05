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

  const handleShowStyles = () => showStyles === true ? setShowStyles(false) : setShowStyles(true);
  const handleShowDex = () => showDex === true ? setShowDex(false) : setShowDex(true);
  const handleShowParks = () => showParks === true ? setShowParks(false) : setShowParks(true);

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
          onClick={handleShowStyles}
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
        <button type="button" className="proj-button" onClick={handleShowDex}>
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
        <button type="button" className="proj-button" onClick={handleShowParks}>
          More
          <br />
          Info
        </button>
      </div>
      {showStyles ? <ProjSSModal onClose={handleShowStyles} /> : null}
      {showDex ? <ProjDexModal onClose={handleShowDex} /> : null}
      {showParks ? <ProjParksModal onClose={handleShowParks} /> : null}
    </div>
  );
}

export default Projects;
