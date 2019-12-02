import React from 'react';
import WritingEntry from '../components/WritingEntry';
import data from '../data/writing_data.json';
import './writing.css';

const Writing = () => {
  return (
    <div className="page-frame">
      <div className="entry-wrapper">
        {data.entries.map(i => <WritingEntry key={i.id} id={i.id}>{i}</WritingEntry>)}
      </div>
    </div>
  )
}

export default Writing;