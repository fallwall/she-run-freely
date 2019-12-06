import React from 'react';
import WritingMobile from '../components/WritingMobile';
import WritingReg from '../components/WritingReg';
import './writing.css';

const Writing = () => {
  return (
    <div className="page-frame">
      <WritingMobile />
      <WritingReg />
    </div>
  )
}

export default Writing;