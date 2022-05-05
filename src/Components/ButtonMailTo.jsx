import React from 'react';

function ButtonMailTo({ mailto, label }) {
  return (
    <button
      onClick={(e) => {
        window.location.href = mailto;
        e.preventDefault();
      }}
      className='email'
    >
      {label}
    </button>
  );
}

export default ButtonMailTo;
