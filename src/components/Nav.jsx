import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <div className="nav">
      <div className="nav-home">
        <Link to="/">Tibby Xu</Link>
      </div>
      <div className="nav-link">
        <Link to="/about"> About </Link>
        <Link to="/codes"> Portfolio </Link>
        <Link to="/writes"> Writing </Link>
        <Link to="/runs"> Running </Link>
        <Link to="/contact"> Contact </Link>
      </div>
    </div>
  );
}