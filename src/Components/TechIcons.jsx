import React from 'react';
// import * as DiIcon from 'react-icons/di';
import reactIcon from '../assets/tech-svg/react-original-wordmark.svg';
import cssIcon from '../assets/tech-svg/css3-original-wordmark.svg';
import scssIcon from '../assets/tech-svg/sass-original.svg';
import jsIcon from '../assets/tech-svg/javascript-original.svg';
import htmlIcon from '../assets/tech-svg/html5-original-wordmark.svg';
import linuxIcon from '../assets/tech-svg/linux-original.svg';
import railsIcon from '../assets/tech-svg/rails-original-wordmark.svg';
import rubyIcon from '../assets/tech-svg/ruby-original.svg';
import postgresIcon from '../assets/tech-svg/postgresql-original-wordmark.svg';
import stackIcon from '../assets/tech-svg/512px-Stack_Overflow_icon.svg.png';
import vsIcon from '../assets/tech-svg/visual-studio-code.svg';
import ubuntuIcon from '../assets/tech-svg/ubuntu.svg';
import gitIcon from '../assets/tech-svg/iconmonstr-github-1-240.png';
import netlifyIcon from '../assets/tech-svg/netlify.svg';

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

  const iconImgs = icons.map((icon, i) => (
    <React.Fragment id={i} key={icon.id}>
      <img src={icon} alt={icon.id} />
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
