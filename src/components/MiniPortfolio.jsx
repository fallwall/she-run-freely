import React from 'react';
import { Link } from 'react-router-dom';
import data from '../data/coding_data.json';

const MiniPortfolio = () => {
  const entries = data.entries.slice(0,12);
  return (
    <div className="mini-portfolio-grid">
      {entries.map(i => <Link to={`/codesthis/${i.id}`}>
        <div key={i.id} className="mini-portfolio-each">
        <img className="mini-portfolio-img" src={i.img} alt="individual portfolio cover"/>
        <div className="mini-portfolio-text">{i.title}({i.year})</div>
        </div>
      </Link>)}
    </div>
  )
}

export default MiniPortfolio;
