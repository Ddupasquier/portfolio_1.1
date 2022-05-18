/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
// import PropTypes from 'prop-types';

function Logo() {
  return (
    <div id="logo">
      Dylan Dupasquier
      {/* <button
        className="bg-toggle"
        type="button"
        onClick={() => handleToggle()}
      >
        BG Animation {showBgAnimation ? <u>OFF</u> : <u>ON</u>}
      </button> */}
    </div>
  );
}

// Logo.propTypes = {
//   // eslint-disable-next-line react/require-default-props
//   showBgAnimation: PropTypes.bool,
//   setShowBgAnimation: PropTypes.func,
// };

// Logo.defaultProps = {
//   setShowBgAnimation: 'true',
// };

export default Logo;
