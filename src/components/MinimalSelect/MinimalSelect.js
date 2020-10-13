import React, {useState} from 'react'
import { useMinimalSelectStyles } from '@mui-treasury/styles/select/minimal';
import {
  Select, MenuItem, InputLabel,
} from '@material-ui/core'
import {ExpandMore} from '@material-ui/icons'

const MinimalSelect = () => {
  const [val, setVal] = useState(0)
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
        <MenuItem value={0}>head-to-head</MenuItem>
        <MenuItem value={1}>aces</MenuItem>
        <MenuItem value={2}>points won</MenuItem>
      </Select>
    </>
  );
}

export default MinimalSelect;
