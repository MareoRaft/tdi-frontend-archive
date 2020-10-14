import React from 'react'

import RadialBarChart from '../RadialBarChart'

const cleanName = (name) => {
  return name.replace(/[_]/g, ' ')
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
