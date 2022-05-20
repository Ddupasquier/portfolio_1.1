import React from 'react';
import {
  reactIcon,
  cssIcon,
  scssIcon,
  jsIcon,
  htmlIcon,
  linuxIcon,
  railsIcon,
  rubyIcon,
  postgresIcon,
  stackIcon,
  vsIcon,
  ubuntuIcon,
  gitIcon,
  netlifyIcon,
} from '../assets/index';

function TechIcons() {
  const icons = [
    reactIcon,
    cssIcon,
    scssIcon,
    jsIcon,
    htmlIcon,
    linuxIcon,
    railsIcon,
    rubyIcon,
    postgresIcon,
    stackIcon,
    vsIcon,
    ubuntuIcon,
    gitIcon,
    netlifyIcon,
  ];

  const iconImgs = icons.map((icon) => (
    <React.Fragment key={icon}>
      <img src={icon} alt={icon} />
      <br />
    </React.Fragment>
  ));

  return (
    <>
      {iconImgs}
      {/* placeholder to stave off eslint  */}
    </>
  );
}

export default TechIcons;
