import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar.js';
import { Route, Link } from 'react-router-dom';
import Home from './components/Home.js';
import BlogContainer from './containers/BlogContainer.js';



class App extends Component {
  render() {
    return (
      <div className="container">
        <Route path='/'  render={() => <NavBar />}/>
        <Route exact path='/' render={() => <Home />} />
        <Route path='/blog' render={() => <BlogContainer />} />
        {/* <Route path='/contact' render={() => <Contact />} /> */}
        {/* <Route path='/portfolio' render={() => <Portfolio />} /> */}
      </div>
    );
  }
}

export default App;
