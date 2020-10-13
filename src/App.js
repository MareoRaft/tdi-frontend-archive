import React, {useState} from 'react'

import './App.css'
import Nav from './components/Nav'
import PlayerRank from './components/PlayerRank'

function App() {
  // set states
  // change handlers
  return (
    <div className="App">
      <header className="App-header">
        <PlayerRank/>
      </header>
    </div>
  );
}

export default App;
