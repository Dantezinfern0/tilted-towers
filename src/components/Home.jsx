import React, { Component } from 'react'
import Solo from './Solo.jsx'
import Duo from './Duo.jsx'
import Squads from './Squads.jsx'


class Home extends Component {
  constructor(props){
    super(props)
    this.state = {
      playerName: '',
    }
  }
  render() {
    return (
      <div>
        <div className="home-page-flex">
          <Solo playerName={this.props.playerName}/>
          <Duo  playerName={this.props.playerName}/>
          <Squads playerName={this.props.playerName} />
        </div>
      </div>
    )
  }
}

export default Home
