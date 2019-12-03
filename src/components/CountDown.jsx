import React from 'react';
import CountUp from 'react-countup';

 const CountDown=(props)=> {
  return (
    <div className="countdonw">
        <CountUp
        start={0}
        delay={props.delay}
        end={props.end}
        duration={2}
        separator=","
        suffix={props.suffix}
        prefix={props.prefix}
        >
        </CountUp>
    </div>
  )
}

export default CountDown;
