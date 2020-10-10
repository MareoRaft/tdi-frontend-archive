import React, {useState} from 'react'
import PropTypes from 'prop-types'

import Chart from '../Chart'


function Component() {
	// set state
  const [updateNum, setUpdateNum] = useState(1)
  // create handlers
  const handleClick = () => {
  	// Increment the update num, triggering the chart to update
  	setUpdateNum(updateNum + 1)
  }
  // return rendered stuff
	return (
    <Chart {...{
    	onClick: handleClick,
  		updateNum,
    }}/>
	);
}

Component.propTypes = {
	onClick: PropTypes.func,
	char: PropTypes.string.isRequired,
};

export default Component;
