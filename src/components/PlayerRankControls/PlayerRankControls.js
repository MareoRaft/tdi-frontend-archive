import React from 'react'
import {
  Button,
} from '@material-ui/core'

import MinimalSelect from '../MinimalSelect'
import gc from '../../global-constants'


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
        values: gc.STAT_TO_DISPLAY_NAME,
      }}/>
      <MinimalSelect {...{
        onChange: props.onChangeNormalization,
        value: props.normalization,
        values: gc.NORMALIZATION_TO_DISPLAY_NAME,
      }}/>
      <MinimalSelect {...{
        onChange: props.onChangeReverse,
        value: props.reverse,
        values: gc.REVERSE_VALUES,
      }}/>
      <MinimalSelect {...{
        onChange: props.onChangeLimit,
        value: props.limit,
        values: gc.LIMIT_VALUES,
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
