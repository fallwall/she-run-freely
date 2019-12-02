import React from 'react';
import CountDown from '../components/CountDown';
import './running.css';

const Running = () => {
  return (
    <>
      <div className="page-frame">
        <div className="countdown-count-wrapper">
          <div className="countdown-count">
            <CountDown end={46} suffix={" Marathons"} delay={2} />
            <CountDown end={46 * 26.2} suffix={" Miles"} delay={2} />
          </div>
          <div className="countdown-count">
            <CountDown end={75} suffix={" Half Marathons"} delay={4} />
            <CountDown end={46 * 13.1} suffix={" Miles"} delay={4} />
          </div>
        </div>
        <div className="countdown-pb-wrapper">
          <div className="countdown-pb">
            <p>Marathon</p>
            <CountDown end={3} suffix={":"} delay={2} />
            <CountDown end={15} suffix={":"} delay={2} />
            <CountDown end={37} suffix={""} delay={2} />
          </div>
          <div className="countdown-pb">
            <p>Mile</p>
            <CountDown end={5} suffix={":"} delay={4} />
            <CountDown end={30} suffix={""} delay={4} />
          </div>
        </div>
      </div>
    </>
  )
}


export default Running;