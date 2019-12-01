import React from 'react';

export default function WritingEntry({children}) {
  return (
    <div className="writing-entry">
      <h1 className="writing-entry-title">{children.title}</h1>
      <p className="writing-entry-content">{children.content}</p>
    </div>
  )
}
