import React from 'react';
import { icons } from '../assets/tech-svg/techicon';

function TechIcons() {
  const iconImgs = icons.map((icon, i) => (
    <React.Fragment key={i}>
      <img src={icon.url} alt={icon} title={icon.title} />
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
