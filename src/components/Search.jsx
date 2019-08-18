import React, { useState } from 'react'
import Home from './Home.jsx'

export default function Form() {
  const [playerName, setPlayerName] = useState('Ninja')
  const [search, setSearch] = useState(false)
  function updateValue(e) {
    e.preventDefault()
    setSearch(true)
  }

  return (
    <div>
      <form onSubmit={e => updateValue(e)} className="form-layout">
        <input
          type="text"
          placeholder="name.."
          onChange={e => setPlayerName(e.target.value)}
        />
        <button onClick="submit"
        type="button">search</button>
      </form>
      {search && <Home playerName={playerName} />}
    </div>
  )
}
