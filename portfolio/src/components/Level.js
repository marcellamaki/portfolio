import React from 'react'
import { withRouter, Link } from 'react-router-dom'

const Level = () => {
  return (
        <div>

        <div className="project-description">
          <div className="project-title">
            <h3>Level</h3>
          </div>
          <p>
            Level is a mental health app that I created with the idea that folks with mental illnesses who don't have a in-person support system often slip through the cracks. A user creates a custom daily check in of their important benchmarks (whether eating, socialization, sleep, exercise, attendance at work or school, etc.) and coordinating customized SMS reminders about how to take care of yourself. While an app is not a substitute for medical care and a support system, I believe tools that increase independence and self-sufficiency can be important part of preventative care.
            <br></br>
            <br></br>
            I mocked the UI using FluidUI and wrote custom CSS for the design. I built the front end using React and Redux because React is fast, it provides a smooth UI, the component structure is ideal for rendering the type of iterative data in each user's profile, and it's easy to update, maintain, and continue to expand on. Using a Redux store allows for the user's information to be store in one static place. I used a Rails backend because a relational database was the best choice for the way my user data was structured and it worked well with the Twilio API for integrating SMS.
          </p>
        </div>
      </div>
      )
}

export default Level;
