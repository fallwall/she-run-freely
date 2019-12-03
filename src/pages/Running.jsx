import React from 'react';
import RunningStats from '../components/RunningStats';
import RunningMap from '../components/RunningMap';
import './running.css';

const Running = () => {
  return (
    <>
      <div className="page-frame">
        <RunningStats />
        <RunningMap />
      </div>
    </>
  )
}


export default Running;