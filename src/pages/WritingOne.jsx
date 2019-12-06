import React from 'react';
import WritingEntryOne from '../components/WritingEntryOne';
import data from '../data/writing_data.json';

const WritingOne = (props) => {
  const entry = data.entries.filter(i => i.id === parseInt(props.id))[0];
  return (
    <div className="page-frame">
      <div className="entry-wrapper-ind">
        <WritingEntryOne
          title={entry.title}
          content={entry.content}
        >
          {entry}
        </WritingEntryOne>
      </div>
    </div>
  )
}

export default WritingOne;
