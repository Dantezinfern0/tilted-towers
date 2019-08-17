import React, { Component } from 'react'
import Scout from '../scout'

class Duo extends Component {
  state = {
    loading: true,
    duoData: 'p10.br.m0.weekly',
    classColor: 'orange-color',
    classColorLight: 'orange-color-light',
    classColorDark: 'orange-color-dark',
    classGradient: 'gradient-effect-orange'
  }

  render() {
    return (
      <div>
        <Scout
          dataType={this.state.duoData}
          classColor={this.state.classColor}
          classColorLight={this.state.classColorLight}
          classColorDark={this.state.classColorDark}
          classGradient={this.state.classGradient}
        />
      </div>
    )
  }
}

export default Duo
