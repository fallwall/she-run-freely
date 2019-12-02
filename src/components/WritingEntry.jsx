import React from 'react';
import { Link } from 'react-router-dom';

export default function WritingEntry({children}) {
  return (
    <div className="writing-entry">
      <Link to={`/writesthis/${parseInt(children.id)}`}><h1 className="writing-entry-title">{children.title}</h1></Link>
      <p className="writing-entry-tagline">{children.tagline}</p>
    </div>
  )
}
