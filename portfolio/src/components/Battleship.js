import React from 'react'
import { withRouter, Link } from 'react-router-dom'

const Battleship = () => {
  return (
        <div>

        <div className="project-description">
          <div className="project-title">
            <h3>Battleship (Team Project)</h3>
          </div>
          <p>
            Battleship is a single-player version of the classic game where the computer plays back. The player navigates their ship on the board and begins the game.
            <br></br>
            <br></br>
            Using ES6 allowed our team to write cleaner code for complex functions, particularly when we were working through the game logic. One of the challenges that we worked on was creating a game board and keeping the ship on the board as the player navigates to place the ship with their arrow keys. A Rails backend was most suited to this project, because it allowed us to easily store the basic information of the players name and a win or loss in the back end. 
          </p>
        </div>
      </div>
      )
}

export default Battleship;
