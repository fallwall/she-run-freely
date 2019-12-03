import React, { Component } from 'react';
import USAMap from "react-usa-map";


class RunningMap extends Component {
  constructor() {
    super();
    this.state = {
      isFull: true
    }
  }

  displayFull = () => {
    this.setState({
      isFull: true
    })
  }
  displayHalf = () => {
    this.setState({
      isFull: false
    })
  }
  mapHandler = (ev) => {
    alert(ev.target.dataset.name);
  };

  statesCustomConfigFull = () => {
    return {
      "AL": {
        fill: "lightpink"
      },
      "CA": {
        fill: "lightpink"
      },
      "CO": {
        fill: "lightpink"
      },
      "CT": {
        fill: "lightpink"
      },
      "DC": {
        fill: "lightpink"
      },
      "FL": {
        fill: "lightpink"
      },
      "GA": {
        fill: "lightpink"
      },
      "NJ": {
        fill: "lightpink"
        // clickHandler: (event) => console.log('Custom handler for NJ', event.target.dataset)
      },
      "IL": {
        fill: "lightpink"
      },
      "KY": {
        fill: "lightpink"
      },
      "ME": {
        fill: "lightpink"
      },
      "MD": {
        fill: "lightpink"
      },
      "MA": {
        fill: "lightpink"
      },
      "MS": {
        fill: "lightpink"
      },
      "NE": {
        fill: "lightpink"
      },
      "NV": {
        fill: "lightpink"
      },
      "NH": {
        fill: "lightpink"
      },
      "NJ": {
        fill: "lightpink"
      },
      "NY": {
        fill: "lightpink"
      },
      "NC": {
        fill: "lightpink"
      },
      "PA": {
        fill: "lightpink"
      },
      "RI": {
        fill: "lightpink"
      },
      "SC": {
        fill: "lightpink"
      },
      "UT": {
        fill: "lightpink"
      },
      "VT": {
        fill: "lightpink"
      },
      "VA": {
        fill: "lightpink"
      },
      "WA": {
        fill: "lightpink"
      },
      "WY": {
        fill: "lightpink"
      }
    };
  };

  statesCustomConfigHalf = () => {
    return {
      "AL": {
        fill: "lightpink"
      },
      "AK": {
        fill: "lightpink"
      },
      "AZ": {
        fill: "lightpink"
      },
      "CA": {
        fill: "lightpink"
      },
      "CO": {
        fill: "lightpink"
      },
      "CT": {
        fill: "lightpink"
      },
      "DC": {
        fill: "lightpink"
      },
      "DE": {
        fill: "lightpink"
      },
      "FL": {
        fill: "lightpink"
      },
      "GA": {
        fill: "lightpink"
      },
      "HI": {
        fill: "lightpink"
      },
      "IL": {
        fill: "lightpink"
      },
      "IN": {
        fill: "lightpink"
      },
      "KY": {
        fill: "lightpink"
      },
      "KS": {
        fill: "lightpink"
      },
      "LA": {
        fill: "lightpink"
      },
      "ME": {
        fill: "lightpink"
      },
      "MD": {
        fill: "lightpink"
      },
      "MA": {
        fill: "lightpink"
      },
      "MI": {
        fill: "lightpink"
      },
      "MN": {
        fill: "lightpink"
      },
      "MS": {
        fill: "lightpink"
      },
      "NE": {
        fill: "lightpink"
      },
      "NV": {
        fill: "lightpink"
      },
      "NH": {
        fill: "lightpink"
      },
      "NJ": {
        fill: "lightpink"
      },
      "NY": {
        fill: "lightpink"
      },
      "NM": {
        fill: "lightpink"
      },
      "NC": {
        fill: "lightpink"
      },
      "OH": {
        fill: "lightpink"
      },
      "OK": {
        fill: "lightpink"
      },
      "OR": {
        fill: "lightpink"
      },
      "PA": {
        fill: "lightpink"
      },
      "RI": {
        fill: "lightpink"
      },
      "SC": {
        fill: "lightpink"
      },
      "TX": {
        fill: "lightpink"
      },
      "UT": {
        fill: "lightpink"
      },
      "VT": {
        fill: "lightpink"
      },
      "VA": {
        fill: "lightpink"
      },
      "WA": {
        fill: "lightpink"
      },
      "WI": {
        fill: "lightpink"
      }
    };
  };

  render() {
    return (
      <div className="running-map">
        <div class="ui buttons">
          <button class="ui button" onClick={this.displayFull}>Full Marathon</button>
          <div class="or"></div>
          <button class="ui grey button" onClick={this.displayHalf}>Half Marathon</button>
        </div>
        {this.state.isFull &&
          (<div className="running-map-area">
            <div><h1>Full Marathon States</h1></div>
            <USAMap
              customize={this.statesCustomConfigFull()}
              onClick={this.mapHandler}
              width={`100%`}
            />
          </div>)
        }
        {!this.state.isFull &&
          (<div className="running-map-area">
            <div><h1>Half Marathon States</h1></div>
            <USAMap
              customize={this.statesCustomConfigHalf()}
              onClick={this.mapHandler}
              width={`100%`}
            />
          </div>)
        }
      </div>
    )
  }
}

export default RunningMap;
