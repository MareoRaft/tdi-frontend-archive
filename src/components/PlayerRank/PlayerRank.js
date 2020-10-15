import React, {useState} from 'react'
import classNames from 'classnames'

import classes from './PlayerRank.module.css'
import PlayerRankChart from '../PlayerRankChart'
import PlayerRankControls from '../PlayerRankControls'


function PlayerRank() {
  // init vars
	// set state
  const [stat, setStat] = useState('ace')
  const [normalization, setNormalization] = useState('percent')
  const [reverse, setReverse] = useState('false')
  const [limit, setLimit] = useState(3)
  const [data, setData] = useState([{category:'', value:0}])
  // create handlers
  const handleChangeStat = (event) => {
    setStat(event.target.value)
  }
  const handleChangeNormalization = (event) => {
    setNormalization(event.target.value)
  }
  const handleChangeReverse = (event) => {
    setReverse(event.target.value)
  }
  const handleChangeLimit = (event) => {
    setLimit(event.target.value)
  }
  const fetchData = React.useCallback(async () => {
    // update data
    const url = new URL(process.env['REACT_APP_BACKEND_URL'])
    const params = {stat, normalization, reverse, limit}
    url.search = new URLSearchParams(params).toString()
    const response = await fetch(url)
    const new_data = await response.json()
    setData(new_data)
  }, [stat, normalization, reverse, limit, setData])
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
          normalization,
          onChangeNormalization: handleChangeNormalization,
          reverse,
          onChangeReverse: handleChangeReverse,
          limit,
          onChangeLimit: handleChangeLimit,
          onSubmit: fetchData,
        }}/>
      </div>
    </>
	);
}

export default PlayerRank;
