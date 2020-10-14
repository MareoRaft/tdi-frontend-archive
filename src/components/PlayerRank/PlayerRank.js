import React, {useState} from 'react'
import classNames from 'classnames'

import classes from './PlayerRank.module.css'
import PlayerRankChart from '../PlayerRankChart'
import PlayerRankControls from '../PlayerRankControls'


function PlayerRank() {
  // init vars
	// set state
  const [stat, setStat] = useState('ace')
  const [limit, setLimit] = useState(5)
  const [data, setData] = useState([{category:'', value:0}])
  // create handlers
  const handleChangeStat = (event) => {
    setStat(event.target.value)
  }
  const handleChangeLimit = (event) => {
    setLimit(event.target.value)
  }
  const fetchData = React.useCallback(async () => {
    // update data
    const url = new URL(process.env['REACT_APP_BACKEND_URL'])
    const params = {stat, limit}
    url.search = new URLSearchParams(params).toString()
    const response = await fetch(url)
    const new_data = await response.json()
    setData(new_data)
  }, [stat, limit, setData])
  // effects
  React.useEffect(() => {
    // run this immediately after rendering
    fetchData()
  }, [fetchData])
  // return rendered stuff
	return (
    <>
      <div className={classNames(classes.split, classes.left)}>
        <PlayerRankChart {...{
          data,
        }}/>
      </div>
      <div className={classNames(classes.split, classes.right)}>
        <PlayerRankControls {...{
          stat,
          onChangeStat: handleChangeStat,
          limit,
          onChangeLimit: handleChangeLimit,
          onSubmit: fetchData,
        }}/>
      </div>
    </>
	);
}

export default PlayerRank;
