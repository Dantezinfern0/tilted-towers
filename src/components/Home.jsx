import React, { Component } from 'react'
import Solo from './Solo.jsx'
import Duo from './Duo.jsx'
import Squads from './Squads.jsx'
import NavBar from './NavBar.jsx'

class Home extends Component {
  render() {
    return (
      <div>
        <div className="pad-bottom">
        <NavBar />
        </div>
        <div className="home-page-flex">
          <Solo />
          <Duo  />
          <Squads  />
        </div>
      </div>
    )
  }
}

export default Home
