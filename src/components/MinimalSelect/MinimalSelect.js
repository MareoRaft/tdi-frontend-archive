import React, {useState} from 'react'
import { useMinimalSelectStyles } from '@mui-treasury/styles/select/minimal';
import {
  Select, MenuItem, InputLabel,
} from '@material-ui/core'
import {ExpandMore} from '@material-ui/icons'

const MinimalSelect = (props) => {
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
        value={props.value}
        onChange={props.onChange}
      >
        {props.values.map((v) =>
          <MenuItem key={v} value={v}>{v}</MenuItem>
        )}
      </Select>
    </>
  );
}

export default MinimalSelect;
