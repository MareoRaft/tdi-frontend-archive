import React, {useState} from 'react'
import PropTypes from 'prop-types'

import PlayerRankChart from '../PlayerRankChart'
import PlayerRankControls from '../PlayerRankControls'


function PlayerRank() {
  React.useEffect(() => {
    // run this immediately after rendering
    fetchData()
  }, [])
  // init vars
	// set state
  const [stat, setStat] = useState('aces')
  const [limit, setLimit] = useState(5)
  const [data, setData] = useState([])
  // create handlers
  const handleChangeStat = (event) => {
    setStat(event.target.value)
  }
  const handleChangeLimit = (event) => {
    setLimit(event.target.value)
  }
  const fetchData = async () => {
    // update data
    const url = new URL(process.env['REACT_APP_BACKEND_URL'])
    const params = {stat, limit}
    url.search = new URLSearchParams(params).toString()
    const response = await fetch(url)
    const new_data = await response.json()
    setData(new_data)
  }
  // return rendered stuff
	return (
    <>
      <PlayerRankChart {...{
        data,
      }}/>
      <PlayerRankControls {...{
        stat,
        onChangeStat: handleChangeStat,
        limit,
        onChangeLimit: handleChangeLimit,
        onSubmit: fetchData,
      }}/>
    </>
	);
}

export default PlayerRank;
