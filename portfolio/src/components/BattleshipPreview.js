import React from 'react'
import { withRouter, Link } from 'react-router-dom'

const BattleshipPreview = () => {
  return (
        <div>

        <div className="project-description">
          <div className="project-title">
            <h3>Battleship</h3>
          </div>
          <p>
            A single-player, online version of the classic game
            <br></br>
            <br></br>
            Built with ES6 and a Rails back end.
            <br></br>
            <br></br>
            <Link to="/portfolio/2" className="textLink">Read More...</Link>
            <br></br>
            <br></br>
          </p>
        </div>
      </div>
      )
}

export default BattleshipPreview;
