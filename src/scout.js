import React, { Component } from 'react'
import DisplayComponent from './components/DisplayComponent.jsx'
// import '.././env'
const _Scout = window.Scout

class Scout extends Component {
  constructor(props) {
    super(props)
    this.state = {
      soloColor: 'blue-color',
      soloColorLight: 'blue-color-Light',
      soloColorDark: 'blue-color-Dark',
      soloGradient: 'gradient-effect-blue',
      duoColor: 'orange-color',
      duoColorLight: 'orange-color-light',
      duoColorDark: 'orange-color-dark',
      duoGradient: 'gradient-effect-orange',
      squadColor: 'purple-color',
      squadColorLight: 'purple-color-light',
      squadColorDark: 'purple-color-dark',
      squadGradient: 'gradient-effect-purple',
      title: '',
      kills: '',
      matches: '',
      wins: '',
      top3: '',
      top3Name: '',
      top6: '',
      top6Name: '',
      top12: '',
      top12Name: '',
      top: '',
      topName: '',
      killDeathRatio: '',
      winRate: '',
      playerName: 'Ninja'
    }
  }
  async componentDidMount() {
    console.log(process.env.CLIENT_SECRET)
    await _Scout.configure({
      clientId: process.env.REACT_APP_CLIENT_ID,
      clientSecret: process.env.CLIENT_REACT_APP_SECRET,
      scope: 'public.read'
    })

    var titles = await _Scout.titles.list()
    var fortnite = titles.find(t => t.slug === 'fortnite')

    _Scout.players
      .search(`${this.state.playerName}`, 'epic', 'pc', fortnite.id, true, true)
      .then(data => {
        var playerId = data.results[0].player.playerId

        _Scout.players
          .get(fortnite.id, playerId, `${this.props.dataType}`)
          .then(data => {
            console.log(data, 'Ajax call Done')
            this.setState({
              title: data.segments[0].metadata[0].displayValue.split(' ', 1),
              kills: data.segments[0].stats[0].displayValue,
              matches: data.segments[0].stats[2].displayValue,
              wins: data.segments[0].stats[3].displayValue,
              top3: data.segments[0].stats[4].displayValue,
              top3Name: data.segments[0].stats[4].metadata.name,
              top6: data.segments[0].stats[5].displayValue,
              top6Name: data.segments[0].stats[5].metadata.name,
              top12: data.segments[0].stats[6].displayValue,
              top12Name: data.segments[0].stats[6].metadata.name,
              killDeathRatio: data.segments[0].stats[8].displayValue,
              winRate: Math.floor(data.stats[12].value * 100)
            })
            if (this.props.dataType === 'p2.br.m0.weekly') {
              this.setState({
                top: this.state.top3,
                topName: this.state.top3Name
              })
            } else if (this.props.dataType === 'p10.br.m0.weekly') {
              this.setState({
                top: this.state.top6,
                topName: this.state.top6Name
              })
            } else if (this.props.dataType === 'p9.br.m0.weekly') {
              this.setState({
                top: this.state.top12,
                topName: this.state.top12Name
              })
            } else {
              this.setState({
                top: 'something',
                topName: 'went wrong'
              })
            }
          })
      })
  }

  render() {
    return (
      <>
        <div>
          <DisplayComponent
            title={this.state.title}
            kills={this.state.kills}
            matches={this.state.matches}
            wins={this.state.wins}
            top={this.state.top}
            topName={this.state.topName}
            killDeathRatio={this.state.killDeathRatio}
            winRate={this.state.winRate}
            classGradient={this.props.classGradient}
            classColor={this.props.classColor}
            classColorLight={this.props.classColorLight}
            classColorDark={this.props.classColorDark}
          />
        </div>
      </>
    )
  }
}

export default Scout
