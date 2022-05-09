import React, { useState } from 'react';
import SimpleStyles from '../assets/simplestyles.gif';
import SimpleStylesPause from '../assets/simplestylepause.png';
import Pokedex from '../assets/pokedex1.0.gif';
import PokedexPause from '../assets/pokedexpause.png';
import NationalParks from '../assets/nationalpark.gif';
import NationalParksPause from '../assets/nationalparkpause.png';

function Projects() {
  const [simpleStyleBg, setSimpleStyleBg] = useState(SimpleStylesPause);
  const [pokedexBg, setPokedexBg] = useState(PokedexPause);
  const [nationalParkBg, setNationalParkBg] = useState(NationalParksPause);

  return (
    <div id="projects">
      <a
        href="https://simplestyles.herokuapp.com/"
        target="_blank"
        rel="noreferrer"
        className="simplestyleimg"
      >
        <div
          style={{ backgroundImage: `url(${simpleStyleBg})` }}
          onMouseOver={() => setSimpleStyleBg(SimpleStyles)}
          onFocus={() => setSimpleStyleBg(SimpleStyles)}
          onMouseOut={() => setSimpleStyleBg(SimpleStylesPause)}
          onBlur={() => setSimpleStyleBg(SimpleStylesPause)}
          className="proj-img"
        >
          <div className="proj-title">SIMPLE STYLES</div>
          <div className="proj-tech">
            TECH: React.js, Ruby on Rails, CSS, HTML5, BCrypt
          </div>
        </div>
      </a>

      <a
        href="https://pokedex-fi.herokuapp.com/"
        target="_blank"
        rel="noreferrer"
        className="pokedeximg"
      >
        <div
          style={{ backgroundImage: `url(${pokedexBg})` }}
          onMouseOver={() => setPokedexBg(Pokedex)}
          onFocus={() => setPokedexBg(Pokedex)}
          onMouseOut={() => setPokedexBg(PokedexPause)}
          onBlur={() => setPokedexBg(PokedexPause)}
          className="proj-img"
        >
          <div className="proj-title">PokeDex</div>
          <div className="proj-tech">TECH: VanillaJs, Html5, CSS</div>
        </div>
      </a>
      <a
        href="https://national-parks-fi.herokuapp.com/"
        target="_blank"
        rel="noreferrer"
        className="nationalparkimg"
      >
        <div
          style={{ backgroundImage: `url(${nationalParkBg})` }}
          onMouseOver={() => setNationalParkBg(NationalParks)}
          onFocus={() => setNationalParkBg(NationalParks)}
          onMouseOut={() => setNationalParkBg(NationalParksPause)}
          onBlur={() => setNationalParkBg(NationalParksPause)}
          className="proj-img"
        >
          <div className="proj-title">National Parks</div>
          <div className="proj-tech">
            TECH: React.js, Ruby on Rails, CSS, HTML5, BCrypt
          </div>
        </div>
      </a>
    </div>
  );
}

export default Projects;
