import React, { Component } from 'react'
import Scout from '../scout'

class Solo extends Component {
  state = {
    loading: true,
    soloData: 'p2.br.m0.weekly',
    classColor: 'blue-color',
    classColorLight: 'blue-color-light',
    classColorDark: 'blue-color-dark',
    classGradient: 'gradient-effect-blue'
  }

  render() {
    return (
      <div>
        <Scout
          dataType={this.state.soloData}
          classColor={this.state.classColor}
          classColorLight={this.state.classColorLight}
          classColorDark={this.state.classColorDark}
          classGradient={this.state.classGradient}
        />
      </div>
    )
  }
}

export default Solo
