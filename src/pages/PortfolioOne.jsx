import React from 'react';
import CodeEntryOne from '../components/CodeEntryOne';
import data from '../data/coding_data.json';

const PortfolioOne = (props) => {
  const entry = data.entries.filter(i => i.id === parseInt(props.id))[0];
  return (
    <div className="page-frame">
      <div className="code-wrapper">
        <CodeEntryOne
          title={entry.title}
          content={entry.content}
        >
          {entry}
        </CodeEntryOne>
      </div>
    </div>
  )
}

export default PortfolioOne;
