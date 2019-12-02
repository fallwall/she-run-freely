import React from 'react';
import CodeEntry from '../components/CodeEntry';
import data from '../data/coding_data.json';
import './coding.css';

const Portfolio = () => {
  return (
    <div className="page-frame">
      <div className="code-wrapper">
        {data.entries.map(i => <CodeEntry key={i.id} id={i.id}>{i}</CodeEntry>)}
      </div>
    </div>
  )
}

export default Portfolio;
