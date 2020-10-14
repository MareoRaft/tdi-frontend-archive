import React, {useState} from 'react'
import PropTypes from 'prop-types'

import RadialBarChart from '../RadialBarChart'

const cleanName = (name) => {
  return name.replace(/[_]/, ' ')
}

function PlayerRankChart(props) {
  // clean data a bit
  const data = props.data.map((datum) => {
    return {
      ...datum,
      'category': cleanName(datum.category),
    }
  })
  // return rendered stuff
	return (
    <RadialBarChart {...{
      onClick: props.fetchData,
  		data,
    }}/>
	);
}

export default PlayerRankChart;
