import React from 'react';
import PropTypes from 'prop-types';

function BackgroundColor({ color }) {
  return <div className="change-bg" style={{ backgroundColor: color }} />;
}

BackgroundColor.propTypes = {
  // eslint-disable-next-line react/require-default-props
  color: PropTypes.string,
};

export default BackgroundColor;
