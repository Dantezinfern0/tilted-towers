// This is the Display Model/Component for that stat box
import React, { Component } from 'react'

class DisplayComponent extends Component {
  render() {
    return (
      <div>
        <div>
          <header className={`header-flex ${this.props.classColorDark}`}>
            <div className={`pad ${this.props.classColorLight}`}>
              <h2>{this.props.title}</h2>
            </div>
            <div className={`${this.props.classGradient}`}>
              <p />
            </div>
            <div className="pad flex-row">
              <p>Matches</p>
              <h2>{this.props.matches}</h2>
            </div>
            <div className="pad flex-row">
              <p>Kills</p>
              <h2>{this.props.kills}</h2>
            </div>
          </header>
          <section className={`ivory flex-row ${this.props.classColor}`}>
            <div className="pad">
              <h1>{this.props.killDeathRatio}</h1>
              <p>K/D Ratio</p>
            </div>
            <div className="pad">
              <h1>{this.props.wins}</h1>
              <p>Wins</p>
            </div>
          </section>
          <section className="flex-row">
            <section className="full-width">
              <div>
                <div>
                  <div className="pad thin-gray-border flex-row">
                    <h4>wins</h4>
                    <p>{this.props.wins}</p>
                  </div>
                </div>

                <div>
                  <div className="pad thin-gray-border flex-row">
                    <h4>Win Rate</h4>
                    <p>{this.props.winRate}%</p>
                  </div>
                </div>
                <div>
                  <div className="pad thin-gray-border flex-row">
                    <h4>Matches</h4>
                    <p>{this.props.matches}</p>
                  </div>
                </div>
              </div>
            </section>
            <section className="full-width">
              <div>
                <div>
                  <div className="pad thin-gray-border flex-row">
                    <h4>{this.props.topName}</h4>
                    <p>{this.props.top}</p>
                  </div>
                </div>
                <div>
                  <div className="pad thin-gray-border flex-row">
                    <h4>K/D Ratio</h4>
                    <p>{this.props.killDeathRatio}</p>
                  </div>
                </div>
                <div>
                  <div className="pad thin-gray-border flex-row">
                    <h4>Kills</h4>
                    <p>{this.props.kills}</p>
                  </div>
                </div>
              </div>
            </section>
          </section>
        </div>
      </div>
    )
  }
}

export default DisplayComponent
