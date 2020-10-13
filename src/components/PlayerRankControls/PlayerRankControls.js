import React, {useState} from 'react'
import { useMinimalSelectStyles } from '@mui-treasury/styles/select/minimal';
import {
  Button,
  Select, MenuItem, InputLabel,
} from '@material-ui/core'
import {ExpandMore} from '@material-ui/icons'

import Chart from '../Chart'

const MinimalSelect = () => {
  const [val, setVal] = useState(1)
  const handleChange = (event) => {
    setVal(event.target.value)
  }
  const minimalSelectClasses = useMinimalSelectStyles()
  const iconComponent = (props) => {
    return (
      <ExpandMore className={props.className + ' ' + minimalSelectClasses.icon}/>
    )
  }
  // moves the menu below the select input
  const menuProps = {
    classes: {
      paper: minimalSelectClasses.paper,
      list: minimalSelectClasses.list,
    },
    anchorOrigin: {
      vertical: "bottom",
        horizontal: "left",
    },
    transformOrigin: {
      vertical: "top",
        horizontal: "left",
    },
    getContentAnchorEl: null,
  }
  return (
    <>
      <Select
        disableUnderline
        classes={{ root: minimalSelectClasses.select }}
        MenuProps={menuProps}
        IconComponent={iconComponent}
        value={val}
        onChange={handleChange}
      >
        <MenuItem value={0}>aces</MenuItem>
        <MenuItem value={1}>points won</MenuItem>
      </Select>
    </>
  );
}

function PlayerRankControls() {
	// set state
  const [updateNum, setUpdateNum] = useState(1)
  const [stat, updateStat] = useState('aces')
  // create handlers
  const handleClick = () => {
  	// Increment the update num, triggering the chart to update
  	setUpdateNum(updateNum + 1)
  }
  const handleChange = () => {
    console.log('selected something')
  }
  // return rendered stuff
	return (
    <>
      <div>
        I am controls
      </div>
      <MinimalSelect/>
      <Button variant="contained" color="primary" size='large' disableElevation>
        Crunch Data
      </Button>
    </>
	);
}

export default PlayerRankControls;
