import React from 'react';
import PortfolioMobile from '../components/PortfolioMobile';
import PortfolioReg from '../components/PortfolioReg';
import './coding.css';

const Portfolio = () => {
  return (
    <div className="page-frame">
      <PortfolioMobile />
      <PortfolioReg />
    </div>
  )
}

export default Portfolio;
