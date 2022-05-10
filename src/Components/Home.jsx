/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import * as AiIcon from 'react-icons/ai';
import Photo1 from '../assets/personalphoto1.jpg';
import Photo2 from '../assets/climbing.jpg';
import Photo3 from '../assets/bierschtadt.jpg';
import Resume from '../assets/Dylan Dupasquier-Resume-Revised-4-28.pdf';
import FlatCert from '../assets/April 2022 Live Grad_Part32.pdf';
import TechIcons from './TechIcons';

function Home() {
  return (
    <div id="about">
      <header>
        <span>Hi, I'm Dylan Dupasquier</span>
        <div id="resume">
          <a href={Resume} download>
            <AiIcon.AiFillFilePdf />
          </a>
          <br />
          <a className="resume-link" href={Resume} download>
            Download
          </a>{' '}
          |{' '}
          <a
            href={Resume}
            className="resume-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            View
          </a>
        </div>
        <br />
      </header>
      <br />
      <h4>
        <i>Full-Stack React & Ruby on Rails Software Developer</i>
      </h4>
      <div className="tech-icons">
        <TechIcons />
      </div>
      <section>
        <div className="img-left">
          <img src={Photo1} alt="linkedin" />
          <img src={Photo2} alt="climbing" />
        </div>
        <p>
          Full Stack Software Developer with ten years of experience in areas of
          carpentry, plumbing and electrical work. This work has prepared me to
          excel in a tech environment that requires creative, constructive, and
          critical thinking skills. My experience doing hands-on work combined
          with the technical skills acquired at{' '}
          <a href={FlatCert} target="_blank" rel="noopener noreferrer">
            Flatiron
          </a>{' '}
          School's Software Engineering bootcamp will allow me to make excellent
          contributions to the world of tech, software development, and computer
          science.
        </p>
        <p>
          I am proficient in building full-scale websites using React and Ruby
          on Rails. I'm a full-stack, junior level developer with a preference
          towards the front-end. At the top-right of this segment there is a
          link where you can download and view my resume. Included on this page
          is a collection of personal projects that I've worked on recently,
          which is consistently being updated with new content, as well as a
          contact section if you would like to contact me.
        </p>
        <br />
      </section>
      <hr />
      <br />
      <section>
        <img src={Photo3} alt="bierschtadt" className="img-right" />
        <p>
          Since the moment I delved into the world of computers by learning to
          customize MySpace themes as a child, a fascination with computer
          science has stayed with me, and now that passion carries me through
          every project I get to work on.
        </p>
        <p>
          When my eyes aren't glued to a computer screen, you can find me
          outside rock climbing, hiking, gardening, or in the garage working on
          my latest wood working project.
        </p>
      </section>
      <br />
      <section>
        <h1>
          <TechIcons />
        </h1>
      </section>
      <br />
    </div>
  );
}

export default Home;
