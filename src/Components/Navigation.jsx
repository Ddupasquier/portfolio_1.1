import React from 'react';
import { HashLink } from 'react-router-hash-link';

function Navigation() {
  const links = [
    <HashLink to="/#about" className="each-link" key="1">
      About
    </HashLink>,
    ' | ',
    <HashLink to="/#projects" className="each-link" key="2">
      Projects
    </HashLink>,
    ' | ',
    <HashLink to="/#contact" className="each-link" key="3">
      Contact
    </HashLink>,
  ];

  return (
    <div id="nav" className="links">
      {links}
    </div>
  );
}

export default Navigation;
