import React from 'react';
import CountDown from '../components/CountDown';

const RunningStats=()=> {
  return (
    <>
        <div className="running-stats">
          <div className="countdown-count-wrapper">
            <div className="countdown-count count-cube">
              <div className="countdown-count-content">
                <CountDown end={46} suffix={" Marathons"} delay={2} />
              </div>
            </div>
            <div className="countdown-count count-cube">
              <div className="countdown-count-content">
                <CountDown end={75} suffix={" Half Marathons"} delay={4} />
              </div>
            </div>
          </div>
          <div className="countdown-pb-wrapper">
            <div className="countdown-pb count-cube">
   
              <div className="countdown-pb-content">

                <CountDown end={3} prefix="Marathon Best " suffix={":"} delay={4} />
                <CountDown end={15} suffix={":"} delay={4} />
                <CountDown end={37} suffix={""} delay={4} />
              </div>
            </div>
            <div className="countdown-pb count-cube">

              <div className="countdown-pb-content">
                <CountDown end={5} prefix="Mile Best " suffix={":"} delay={2} />
                <CountDown end={30} suffix={""} delay={2} />
              </div>
            </div>
          </div>
        </div>
    
    </>
  )
}

export default RunningStats;
