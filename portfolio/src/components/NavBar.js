import { Link } from 'react-router-dom'
import React, { Component } from 'react';

class NavBar extends React.Component {

  render(){
    return(
        <div className="nav">
          <p>
            <a href="https:///github.com/marcellamaki" className="navLink">GitHub</a>
            •
            <a href="mailto:marcellamaki@gmail.com" className="navLink">Email</a>
            •
            <Link to="/portfolio" className="navLink">Resume</Link>
          </p>
        </div>
    )
  }
}

export default NavBar;
