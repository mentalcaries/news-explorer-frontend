import React from 'react';
import './About.css';
import profile from '../../images/dev.jpg';

function About() {
  return (
    <section className="about">
      <div className="about__image">
        <img className="about__profile" src={profile} alt="The author." />
      </div>
      <div className="about__text">
        <h2 className="about__title">About the Author</h2>
        <p className="about__paragraph">
          Devin Jaggernauth is a Full Stack Developer who's currently working
          with JavaScript and the MERN Stack having graduated from Pracicum's
          Web Dev program in January 2022.
        </p>
        <p className="about__paragraph">
          He's participated in real world projects such as DotCot and every code
          jam since enrollment. He enjoys finding creative and efficient ways to
          solve problems whether working on a small solo project, or with a
          team.
        </p>
      </div>
    </section>
  );
}

export default About;
