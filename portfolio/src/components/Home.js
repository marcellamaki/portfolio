import React from 'react'
import { withRouter, Link } from 'react-router-dom'
import LevelPreview from './LevelPreview.js'
import BattleshipPreview from './BattleshipPreview.js'
import HangpersonPreview from './HangpersonPreview.js'

const Home = () => {
  return (
        <div>

        <div className="container">
          <div className="site-title">
            <h2>Marcella Maki</h2>
          </div>
          <p>
            I'm a full stack web developer, academic researcher, and advocate with an interest in technology for the public good.
            <br></br>
            <br></br>
            I build applications in Rails, JavaScript, React, and React Native with the help of HTML and CSS.
            <br></br>
            <br></br>
            I think the most challenging and exciting part of being a developer is finding simple, elegant solutions and thinking about creative ways to use existing technologies to solve new problems.
            <br></br>
            <br></br>
          </p>
        </div>

        <LevelPreview />
        <BattleshipPreview />
        <HangpersonPreview />
      </div>
      )
}

export default Home;
