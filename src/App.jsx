import React, { Component } from 'react';
import Nav from './components/Nav';
import { Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Running from './pages/Running';
import Writing from './pages/Writing';
import Contact from './pages/Contact';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <p>portfolio V2</p>
        <Route exact path="/" render={()=><Home />}/>
        <Route exact path="/about" render={()=><About />}/>
        <Route exact path="/portfolio" render={()=><Portfolio />}/>
        <Route exact path="/runs" render={()=><Running />}/>
        <Route exact path="/writes" render={()=><Writing />}/>
        <Route exact path="/contact" render={()=><Contact />}/>
      </div>
    )
  }
}

