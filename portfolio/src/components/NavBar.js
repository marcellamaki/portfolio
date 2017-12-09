import { Link } from 'react-router-dom'
import React, { Component } from 'react';

class NavBar extends React.Component {

  render(){
    return(
        <div className="nav">
          <p>
            <a href="https://github.com/marcellamaki" className="navLink">GitHub</a>
            •
            <a href="mailto:marcellamaki@gmail.com" className="navLink">Email</a>
            •
            <a href="https://docs.google.com/document/d/1zrmN-0DsMAAQlFr9TpfNRGlgb8InyUz41eouTXFZESE/edit?usp=sharing" className="navLink">Resume</a>
            •
            <a href="https://medium.com/@marcellamaki" className="navLink">Blog</a>
          </p>
        </div>
    )
  }
}

export default NavBar;
