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
        />
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
        />
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
        />
      </a>
    </div>
  );
}

export default Projects;