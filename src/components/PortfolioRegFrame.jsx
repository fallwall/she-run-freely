import React from 'react';

export default function PortfolioRegFrame(props) {
  console.log(props.entry);
  return (
    <div className='column2'>
      <div className="portfolio-reg-frame">
        {props.entry && <h1 className="code-entry-title">{props.entry[0].title}</h1>}
        {props.entry && <p>{props.entry[0].tagline}</p>}
        {props.entry && props.entry[0].imgs && props.entry[0].imgs.map(i => <img src={i} alt="cover" />)}
        {props.entry && <p>{props.entry[0].content}</p>}
      </div>
    </div>
  )
}
