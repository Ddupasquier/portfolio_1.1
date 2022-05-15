import React from 'react';
import Logo from './Logo';
import MainContent from './MainContent';
import SocialLinks from './SocialLinks';

function Container() {
  return (
    <div id="container">
      <Logo />
      <SocialLinks />
      <MainContent />
    </div>
  );
}

export default Container;
