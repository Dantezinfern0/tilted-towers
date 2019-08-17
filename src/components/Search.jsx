import React, { Component } from 'react'

class Search extends Component {
  render() {
    return (
      <div>
        <form>
          <input 
          type="text"
          placeholder="name.."
           />
           <button type="button">search</button>
        </form>
      </div>
    )
  }
}

export default Search
