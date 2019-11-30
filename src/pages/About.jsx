import React from 'react';
import data from '../data/about_data.json';

const About=()=> {
  return (
    <div>
      {data.bio}
    </div>
  )
}

export default About;
