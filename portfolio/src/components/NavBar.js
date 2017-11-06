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
            <Link to="/resume" className="navLink">Resume</Link>
            •
            <Link to="/blog" className="navLink">Blog</Link>
          </p>
        </div>
    )
  }
}

export default NavBar;
