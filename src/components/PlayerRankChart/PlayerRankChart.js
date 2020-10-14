import React, {useState} from 'react'
import PropTypes from 'prop-types'

import RadialBarChart from '../RadialBarChart'


function PlayerRankChart(props) {
  // return rendered stuff
	return (
    <RadialBarChart {...{
      onClick: props.fetchData,
  		data: props.data,
    }}/>
	);
}

export default PlayerRankChart;
