/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import ContactForm from './ContactForm';
import SocialLinks from './SocialLinks';

function Contact() {
  return (
    <div id="contact">
      <h3>I'd Love To Hear From You</h3>
      <SocialLinks />
      <ContactForm />
    </div>
  );
}

export default Contact;
