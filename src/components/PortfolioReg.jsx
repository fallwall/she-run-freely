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
      entries: data.entries,
      entry: data.entries.filter(i => i.id === 14)
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
        <div class='row'>
          <PortfolioRegList
            entries={this.state.entries}
            entry={this.state.entry}
            select={this.selectEntry}
          />
          <PortfolioRegFrame
            entry={this.state.entry}
          />
        </div>
      </div>
    )
  }
}
