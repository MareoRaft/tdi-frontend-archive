import React, {useState} from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'

import Chart from '../Chart'


function PlayerRankControls() {
	// set state
  const [updateNum, setUpdateNum] = useState(1)
  // create handlers
  const handleClick = () => {
  	// Increment the update num, triggering the chart to update
  	setUpdateNum(updateNum + 1)
  }
  // return rendered stuff
	return (
    <>
      <div>
        I am controls
      </div>
      <Button variant="contained" color="primary" size='large' disableElevation>
        Crunch Data
      </Button>
    </>
	);
}

export default PlayerRankControls;
