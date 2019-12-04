import React from 'react';

export default function PortfolioRegList(props) {
  return (
    <div className='column'>
      <div className="portfolio-reg-list">

        {props.entries && props.entry && props.entries.map(i => <div
          key={i.id}
          name={i.id}
          onClick={(ev) => { ev.preventDefault(); props.select(i.id); }}
          className={i.id === props.entry[0].id ? "portfolio-reg-list-each-active" : "portfolio-reg-list-each"}
        >
          <h3>{i.title} <span>({i.year})</span></h3>
        </div>)}
      </div>
    </div>
  )
}
