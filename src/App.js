import React, {useState} from 'react'
import {FaAlignRight} from 'react-icons/fa'

import './App.css'
// import Chart from './components/Chart'
// import MyChart from './components/MyChart'
// import ForceDirectedTree from './components/ForceDirectedTree'
import PlayerRankChart from './components/PlayerRankChart'
const STAT_TYPES = ['open', 'high', 'low', 'close']


function App() {
  // set states
  const [isNavBarOpen, setIsNavBarOpen] = useState(true)
  const [tickerInput, setTickerInput] = useState('VZ')
  const [url, setUrl] = useState(process.env['REACT_APP_BACKEND_URL'])
  const [statsToDisplay, setStatsToDisplay] = useState(new Set())
  // change handlers
  const handleToggleNav = () => {
    setIsNavBarOpen(!isNavBarOpen)
  }
  return (
    <div className="App">
      <div className="nav-bar">
        <button className="nav-button" onClick={handleToggleNav}>
          <FaAlignRight/>
        </button>
        <ul className={isNavBarOpen ? 'nav-links show-nav': 'nav-links'}>
          <li href='#'>Stock Ticker App</li>
          <li>
            <a
              className="App-link"
              href="https://github.com/MareoRaft/stock-backend-tdi"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              className="App-link"
              href="https://www.thedataincubator.com/12day.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              12-day
            </a>
          </li>
        </ul>
      </div>
      <header className="App-header">
        Welcome to this app.
        <PlayerRankChart {...{
          url: url,
        }}/>
      </header>
    </div>
  );
}

export default App;
