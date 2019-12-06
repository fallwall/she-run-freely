import React from 'react';
import WritingEntry from './WritingEntry';
import data from '../data/writing_data.json';

export default function WritingMobile() {
  return (
      <div className="entry-wrapper">
        {data.entries.map(i => <WritingEntry key={i.id} id={i.id}>{i}</WritingEntry>)}
      </div>
  )
}
