import React from 'react'
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
        values: {
          'ace': 'aces',
          'ptWin': 'points won',
          'svcPtWin': 'service points won',
          'dblFault': 'double faults',
          'pagerank': 'head-to-head',
        },
      }}/>
      <MinimalSelect {...{
        onChange: props.onChangeNormalization,
        value: props.normalization,
        values: {
          'count': 'count',
          'percent': 'percent',
        },
      }}/>
      <MinimalSelect {...{
        onChange: props.onChangeLimit,
        value: props.limit,
        values: [3, 5, 8, 14],
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
