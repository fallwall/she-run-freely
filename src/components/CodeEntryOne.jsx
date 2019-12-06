import React from 'react';

export default function CodeEntryOne({ children }) {
  return (
    <div className="code-entry-one">
      <h1 className="code-entry-title">{children.title}</h1>
      {children.imgs &&
        (<div className="code-entry-imgs">
          {children.imgs.map(i => <img key={i} src={i} alt="individual images for project" />)}
        </div>)}
      <p className="code-entry-content">{children.content}</p>
    </div>
  )
}