import React from 'react'
import { withRouter, Link } from 'react-router-dom'

const HangpersonPreview = () => {
  return (
        <div>

        <div className="project-description">
          <div className="project-title">
            <h3>Hangperson</h3>
          </div>
          <p>
            A single-player CLI game
            <br></br>
            <br></br>
            Built in Ruby.
            <br></br>
            <br></br>
            <Link to="/portfolio/3" className="textLink">Read More...</Link>
            <br></br>
            <br></br>
          </p>
        </div>
      </div>
      )
}

export default HangpersonPreview;
