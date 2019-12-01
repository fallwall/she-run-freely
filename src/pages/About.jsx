import React from 'react';
import data from '../data/about_data.json';
import './about.css';

const About = () => {
  return (
    <div className="bio">
      <div className="bio-wrapper">
        <p>{data.bio}</p>
      </div>
      <div className="tech-stack-wrapper">
        <div className="tech-stack-front-wrapper">
          {data.frontStack.map(i => <div className="tech-stack tech-stack-front" key={i}>{i}</div>)}
        </div>
        <div className="tech-stack-back-wrapper">
          {data.backStack.map(i => <div className="tech-stack tech-stack-back" key={i}>{i}</div>)}
        </div>
      </div>
    </div>
  )
}

export default About;
