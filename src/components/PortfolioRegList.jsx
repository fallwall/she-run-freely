import React from 'react';

export default function PortfolioRegList(props) {
  return (
    <div class='column'>
    <div className="portfolio-reg-list">
      {props.entries && props.entries.map(i => <div
        key={i.id}
        name={i.id}
        onClick={(ev) => { ev.preventDefault(); props.select(i.id); }}
        className="portfolio-reg-list-each"
      >
        {i.title} ({i.year})
      </div>)}
    </div>
    </div>
  )
}
