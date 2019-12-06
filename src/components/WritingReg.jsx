import React, { Component } from 'react';
import WritingRegList from './WritingRegList';
import WritingRegFrame from './WritingRegFrame';
import data from '../data/writing_data.json';

export default class WritingReg extends Component {
  constructor() {
    super();
    this.state = {
      entries: null,
      entry: null
    }
  }

  componentDidMount = () => {
    this.setState({
      entries: data.entries,
      entry: data.entries.filter(i => i.id === 1)
    })
  }

  selectEntry = (id) => {
    this.setState({
      entry: data.entries.filter(i => i.id === parseInt(id))
    })
  }

  render() {
    return (
      <div className="entry-wrapper-full">
        <div class='row'>
          <WritingRegList
            entries={this.state.entries}
            entry={this.state.entry}
            select={this.selectEntry}
          />
          <WritingRegFrame
            entry={this.state.entry}
          />
        </div>
      </div>
    )
  }
}
