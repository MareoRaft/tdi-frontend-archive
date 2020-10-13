import React, {useState} from 'react'
import {
  Button,
} from '@material-ui/core'

import MinimalSelect from '../MinimalSelect'


function PlayerRankControls() {
	// set state
  const [updateNum, setUpdateNum] = useState(1)
  const [stat, setStat] = useState('aces')
  // create handlers
  const handleClick = () => {
  	// Increment the update num, triggering the chart to update
  	setUpdateNum(updateNum + 1)
  }
  const handleChange = () => {
    console.log('selected something')
  }
  const handleChangeStat = (event) => {
    setStat(event.target.value)
  }
  // return rendered stuff
	return (
    <>
      <div>
        I am controls
      </div>
      <MinimalSelect {...{
        onChange: handleChangeStat,
        value: stat,
        values: ['aces', 'head-to-head', 'points won'],
      }}/>
      <Button variant="contained" color="primary" size='large' disableElevation>
        Crunch Data
      </Button>
    </>
	);
}

export default PlayerRankControls;
