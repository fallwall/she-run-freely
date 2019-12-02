import React from 'react';

export default function CodeEntryOne({ children }) {
  return (
    <div className="code-entry-one">
      <h1 className="code-entry-title">{children.title}</h1>
      <p className="code-entry-content">{children.content}</p>
    </div>
  )
}