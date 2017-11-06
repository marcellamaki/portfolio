import React from 'react'
import { withRouter, Link } from 'react-router-dom'

const LevelPreview = () => {
  return (
        <div>

        <div className="project-description">
          <div className="project-title">
            <h3>Level</h3>
          </div>
          <p>
            A mental health care reminder app to help people remember to do the things that keep them feeling good.
            <br></br>
            <br></br>
            Built in React and Redux with a Rails back end and the Twilio API.
            <br></br>
            <br></br>
            <Link to="/portfolio/1" className="textLink">Read More...</Link>
            <br></br>
            <br></br>
          </p>
        </div>
      </div>
      )
}

export default LevelPreview;
