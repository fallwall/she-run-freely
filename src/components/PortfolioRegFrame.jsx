import React from 'react';

export default function PortfolioRegFrame(props) {
  return (
    <div className="portfolio-reg-frame">
      {props.entry && props.entry.imgs.map(i => <img src={i} alt="cover" />)}
    </div>
  )
}
