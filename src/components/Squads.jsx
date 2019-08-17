import React, { Component } from 'react'
import Scout from '../scout'

class Squads extends Component {
  state = {
    loading: true,
    squadData: 'p9.br.m0.weekly',
    classColor: 'purple-color',
    classColorLight: 'purple-color-light',
    classColorDark: 'purple-color-dark',
    classGradient: 'gradient-effect-purple'
  }
  render() {
    return (
      <div>
        <Scout
          dataType={this.state.squadData}
          classColor={this.state.classColor}
          classColorLight={this.state.classColorLight}
          classColorDark={this.state.classColorDark}
          classGradient={this.state.classGradient}
        />
      </div>
    )
  }
}

export default Squads
