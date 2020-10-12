import React, {useState} from 'react'
import PropTypes from 'prop-types'

import RadialBarChart from '../RadialBarChart'


function Component() {
  // init vars
  const num_results = 5
	// set state
  const [data, setData] = useState([])
  // create handlers
  const fetchData = async () => {
    // update data
    const response = await fetch('http://localhost:5000/')
    const new_data = await response.json()
    const view_data = new_data.slice(0, num_results)
    setData(view_data)
  }
  React.useEffect(() => {
    // run this immediately after rendering
    fetchData()
  }, [])
  // return rendered stuff
	return (
    <RadialBarChart {...{
      onLoad: fetchData,
      onClick: fetchData,
  		data,
    }}/>
	);
}

export default Component;
