import React from 'react'
import { withRouter, Link } from 'react-router-dom'

const Hangperson = () => {
  return (
        <div>

        <div className="project-description">
          <div className="project-title">
            <h3>Hangperson (Pair Programming Project)</h3>
          </div>
          <p>
            Hangperson is a CLI version of the classic hangman game. The hangperson game has a database built into the app with words and phrases. There are five categories, each of them containing words and phrases.
            The user has six strikes before the game ends, resulting in a loss for the user. If the user successfully guesses each letter, or successfully "solves", then the game ends, resulting in a win for the user.
            <br></br>
            <br></br>
            Using Ruby allowed up to build the game quickly while maintaining flexibility. Since Ruby is easy to read, it also allowed us to write game logic with simple, easy-to-follow code. We did not use a backend for this project, although while the program is running, multiple users can take turns playing and the program will record their wins and losses.
          </p>
        </div>
      </div>
      )
}

export default Hangperson;
