import React from 'react';

const WritingRegFrame=(props)=> {
  return (
    <div className='column2'>
      <div className="writing-reg-frame">
        {props.entry && <h1 className="writing-entry-title">{props.entry[0].title}</h1>}
        {props.entry && <p><span>{props.entry[0].tagline}</span></p>}

        {props.entry && <p>{props.entry[0].content}</p>}
      </div>
    </div>
  )
}

export default WritingRegFrame;
