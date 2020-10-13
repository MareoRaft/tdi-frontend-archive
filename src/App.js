import React, {useState} from 'react'

import './App.css'
import Nav from './components/Nav'
import PlayerRankChart from './components/PlayerRankChart'
import PlayerRank from './components/PlayerRank'
const STAT_TYPES = ['open', 'high', 'low', 'close']

function App() {
  // set states
  const [tickerInput, setTickerInput] = useState('VZ')
  const [url, setUrl] = useState(process.env['REACT_APP_BACKEND_URL'])
  const [statsToDisplay, setStatsToDisplay] = useState(new Set())
  // change handlers
  return (
    <div className="App">
      <header className="App-header">
        Welcome to this app.
        <PlayerRank/>
      </header>
    </div>
  );
}

export default App;
