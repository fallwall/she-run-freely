import React, { Component } from 'react';
import PortfolioRegList from './PortfolioRegList';
import PortfolioRegFrame from './PortfolioRegFrame';
import data from '../data/coding_data.json';

export default class PortfolioReg extends Component {
  constructor() {
    super();
    this.state = {
      entries: null,
      entry: null
    }
  }

  componentDidMount = () => {
    this.setState({
      entries: data.entries
    })
  }

  selectEntry = (id) => {
    this.setState({
      entry: data.entries.filter(i => i.id === parseInt(id))
    })
  }

  render() {
    return (
      <div className="code-wrapper-full">
        <p>reg</p>
        <PortfolioRegList
          entries={this.state.entries}
          select={this.selectEntry}
        />
        <PortfolioRegFrame
          entry={this.state.entry}
        />
      </div>
    )
  }
}
