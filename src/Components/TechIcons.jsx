import React from 'react';
import { icons } from '../assets/tech-svg/techicon';

function TechIcons() {
  const iconImgs = icons.map((icon) => (
    <React.Fragment key={icon}>
      <img src={icon.url} alt={icon} />
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
