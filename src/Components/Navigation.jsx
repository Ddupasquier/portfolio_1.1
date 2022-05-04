import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  const contact = ['c', 'o', 'n', 't', 'a', 'c', 't'];
  const about = ['a', 'b', 'o', 'u', 't'];
  const projects = ['p', 'r', 'o', 'j', 'e', 'c', 't', 's'];

  const links = [
    <Link to="/" className="each-button" key="1">
      {about}
    </Link>,
    ' | ',
    <Link to="/projects" className="each-button" key="2">
      {projects}
    </Link>,
    ' | ',
    <Link to="contact" className="each-button" key="3">
      {contact}
    </Link>,
  ];

  return (
    <nav>
      <div className="logo">Dylan Dupasquier</div>
      <div className="links">
        {links}
      </div>
    </nav>
  );
}

export default Navigation;