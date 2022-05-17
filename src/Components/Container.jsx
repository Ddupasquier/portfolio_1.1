import React from 'react';
// import PropTypes from 'prop-types';
import Logo from './Logo';
import MainContent from './MainContent';
import SocialLinks from './SocialLinks';

function Container() {
  return (
    <div id="container">
      {/* <Logo
        showBgAnimation={showBgAnimation}
        setShowBgAnimation={setShowBgAnimation}
      /> */}
      <Logo />
      <SocialLinks />
      <MainContent />
    </div>
  );
}

// Container.propTypes = {
//   // eslint-disable-next-line react/require-default-props
//   showBgAnimation: PropTypes.bool,
//   setShowBgAnimation: PropTypes.func,
// };

// Container.defaultProps = {
//   setShowBgAnimation: 'true',
// };

export default Container;
