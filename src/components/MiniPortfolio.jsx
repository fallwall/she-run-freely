import React from 'react';
import data from '../data/coding_data.json';

const MiniPortfolio = () => {
  const entries = data.entries.slice(0,12);
  return (
    <div className="mini-portfolio-grid">
      {entries.map(i => <div key={i.id} className="mini-portfolio-each">
        <img className="mini-portfolio-img" src={i.img} />
        <div className="mini-portfolio-text">{i.title}({i.year})</div>
      </div>)}
    </div>
  )
}

export default MiniPortfolio;
