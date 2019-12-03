import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { stack as Menu } from 'react-burger-menu';

const styles = {
  bmBurgerButton: {
    position: 'fixed',
    width: '36px',
    height: '30px',
    right: '36px',
    top: '36px'
  },
  bmBurgerBars: {
    background: '#373a47'
  },
  bmBurgerBarsHover: {
    background: 'lightpink'
  },
  bmCrossButton: {
    height: '10em',
    width: '10em'
  },
  bmCross: {
    background: 'black'
  },
  bmMenuWrap: {
    position: 'fixed',
    height: '100%'
  },
  bmMenu: {
    padding: '0 2em',
    fontSize: '1.5em'
  },
  bmMorphShape: {
    fill: '#373a47'
  },
  bmItemList: {
    color: '#b8b7ad',
    padding: '0.8em'
  },
  bmItem: {
    display: 'block',
    margin: '1.8em 0'
  },
  bmOverlay: {
    background: 'white'
  }
}

export default class Burger extends Component {
  constructor() {
    super();
    this.state = {
      menuOpen: true
    }
  }
  
  handleMenuClick = () => { 
    this.setState({
      menuOpen: false
    })
  }

  render() {
    return (
      <div className="nav-mobile">
        <Menu isOpen={this.state.menuOpen} width={`100%`} styles={styles} right>
          <Link onClick={this.handleMenuClick} to="/about"> About </Link>
          <Link onClick={this.handleMenuClick} to="/codes"> Portfolio </Link>
          <Link onClick={this.handleMenuClick} to="/writes"> Writing </Link>
          <Link onClick={this.handleMenuClick} to="/runs"> Running </Link>
        </Menu>
      </div>
    )
  }
}
