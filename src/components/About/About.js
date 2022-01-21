import React from 'react';
import './About.css';
import profile from '../../images/profile.jpg';

function About() {
  return (
    <section className="about">
      <div className="about__image">
        <img className="about__profile" src={profile} alt="The author." />
      </div>
      <div className="about__text">
        <h2 className="about__title">About the Author</h2>
        <p className="about__paragraph">
          This block describes the project author. Here you should indicate your
          name, what you do, and which development technologies you know.
          </p>
          <p className="about__paragraph">
            You can also talk about your experience with Practicum, what you
            learned there, and how you can help potential customers.
        </p>
      </div>
    </section>
  );
}

export default About;
