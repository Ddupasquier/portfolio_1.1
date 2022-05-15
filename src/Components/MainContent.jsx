import React from 'react';
// import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Projects from './Projects';
import ContactForm from './ContactForm';

function MainContent() {
  return (
    <div id="main-content">
      {/* <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<ContactForm />} />
      </Routes> */}
      <Home />
      <Projects />
      <ContactForm />
    </div>
  );
}

export default MainContent;
