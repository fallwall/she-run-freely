import React from 'react';
import { Link } from 'react-router-dom';

export default function CodeEntry({children}) {
  return (
    <div className="writing-entry">
      <Link to={`/codesthis/${parseInt(children.id)}`}><h1 className="code-entry-title">{children.title}</h1></Link>
      <p>({children.year})</p>
      <p>{children.medium.map(i => <span>{i}</span>)}</p>
      <p className="code-entry-tagline">{children.tagline}</p>
    </div>
  )
}