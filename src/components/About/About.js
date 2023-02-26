import React from 'react';
import './About.css';
import profile from '../../images/dev.jpg';
import { Link } from 'react-router-dom';

function About() {
  return (
    <section className="about">
      <div className="about__image">
        <img className="about__profile" src={profile} alt="The author." />
      </div>
      <div className="about__text">
        <h2 className="about__title">About the Author</h2>
        <p className="about__paragraph">
          Devin Jaggernauth is a Full Stack Developer who's experienced
          with JavaScript/TypeScript and the MERN Stack. 
        </p>
        <p className="about__paragraph">
          He's participated in real world projects such as DotCot, WTWR and is currently a mentor at <Link to={{  pathname: "https://the-collab-lab.codes/" }} target="_blank" >The Collab Lab</Link>. He enjoys finding creative and efficient ways to
          solve problems whether working on a small solo project, or with a
          team.
        </p>
      </div>
    </section>
  );
}

export default About;
