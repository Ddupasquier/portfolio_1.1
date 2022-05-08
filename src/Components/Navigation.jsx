import React from 'react';
import { Link } from 'react-router-dom';

function Navigation({ color }) {
  const linkStyle = { color: color, filter: 'brightness(200)' };

  const links = [
    <Link to='/' className='each-button' key='1' style={linkStyle}>
      About
    </Link>,
    ' | ',
    <Link to='/projects' className='each-button' key='2' style={linkStyle}>
      Projects
    </Link>,
    ' | ',
    <Link to='contact' className='each-button' key='3' style={linkStyle}>
      Contact
    </Link>,
  ];

  return (
    <nav>
      <div className='logo'>Dylan Dupasquier</div>
      <div className='links'>{links}</div>
    </nav>
  );
}

export default Navigation;
