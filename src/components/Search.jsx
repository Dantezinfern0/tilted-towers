import React, { Component } from 'react'
import Home from './Home.jsx'


class Search extends Component {
  constructor(props){
    super(props)
    this.state = {
      playerName: 'Ninja'
    }
  }
  updateValue = e => {
    e.preventDefault()
    console.log(e.target.value)
    this.setState({
      playerName: e.target.value,
    })
  }
  render() {
    return (
      <div>
        <form className="form-layout">
          <input 
          type="text"
          placeholder="name.."
           />
           <button 
           onClick={e => this.updateValue}
           type="button">search</button>
        </form>
        {this.playerName && <Home playerName={this.state.playerName}/>}
      </div>
    )
  }
}

export default Search
