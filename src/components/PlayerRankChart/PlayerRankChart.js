import React from 'react'

import RadialBarChart from '../RadialBarChart'
import gc from '../../global-constants'

const cleanName = (name) => {
  return name.replace(/[_]/g, ' ')
}

const getTitle = (stat, normalization, reverse) => {
  const Top = (reverse === 'true') ? 'Bottom' : 'Top'
  const percent = (normalization === 'count') ? '#' : '%'
  const aces = gc.STAT_TO_DISPLAY_NAME[stat]
  const title = `${Top} players by ${percent} ${aces}`
  return title
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
      title: getTitle(props.stat, props.normalization, props.reverse),
    }}/>
	);
}

export default PlayerRankChart;
