import React from 'react';
import CodeEntry from '../components/CodeEntry';
import data from '../data/coding_data.json';

const PortfolioMobile = () => {
  return (
    <div className="code-wrapper">
      {data.entries.map(i => <CodeEntry key={i.id} id={i.id}>{i}</CodeEntry>)}
    </div>
  )
}

export default PortfolioMobile;
