import React from 'react';

export default function PortfolioRegFrame(props) {
  return (
    <div class='column2'>
    <div className="portfolio-reg-frame">
      {props.entry && props.entry[0].imgs && props.entry[0].imgs.map(i => <img src={i} alt="cover" />)}
    </div>
    </div>
  )
}
