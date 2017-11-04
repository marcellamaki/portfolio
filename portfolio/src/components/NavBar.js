import { Link } from 'react-router-dom'
import React, { Component } from 'react';

class NavBar extends React.Component {

  render(){
    return(
        <div className="nav">
          <p>
            <Link to="/" className="navLink">Home</Link>
            •
            <Link to="/about" className="navLink">About</Link>
            •
            <Link to="/contact" className="navLink">Contact</Link>
            •
            <Link to="/portfolio" className="navLink">Portfolio</Link>
          </p>
        </div>
    )
  }
}

export default NavBar;
