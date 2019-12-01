import React from 'react';
import WritingEntry from '../components/WritingEntry';
import data from '../data/writing_data.json';

export default function Writing() {
  return (
    <div className="page-frame">
      <div className="entry-wrapper">
        {data.entries.map(i => <WritingEntry key={i}>{i}</WritingEntry>)}
      </div>
    </div>
  )
}
