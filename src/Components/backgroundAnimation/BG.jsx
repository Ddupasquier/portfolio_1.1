import React from 'react';
import PropTypes from 'prop-types';
import BackgroundColor from './BackgroundColor';
import Burst from './Burst';

function BG({ changeBg, color }) {
  return (
    <>
      <BackgroundColor color={color} />
      <Burst changeBg={changeBg} color={color} />
    </>
  );
}

BG.propTypes = {
  // eslint-disable-next-line react/require-default-props
  color: PropTypes.string,
  // eslint-disable-next-line react/require-default-props
  changeBg: PropTypes.func,
};

export default BG;
