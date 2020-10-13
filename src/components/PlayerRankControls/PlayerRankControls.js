import React, {useState} from 'react'
import {
  Button,
} from '@material-ui/core'

import MinimalSelect from '../MinimalSelect'


function PlayerRankControls(props) {
	// set state
  // create handlers
  // return rendered stuff
	return (
    <>
      <div>
        I am controls
      </div>
      <MinimalSelect {...{
        onChange: props.onChangeStat,
        value: props.stat,
        values: ['aces', 'head-to-head', 'points won'],
      }}/>
      <Button {...{
        variant: 'contained',
        color: 'primary',
        size: 'large',
        disableElevation: true,
        onClick: props.onSubmit,
      }}>
        Crunch Data
      </Button>
    </>
	);
}

export default PlayerRankControls;
