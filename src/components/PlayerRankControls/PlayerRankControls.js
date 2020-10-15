import React from 'react'
import {
  Button,
} from '@material-ui/core'

import classes from './PlayerRankControls.module.css'
import MinimalSelect from '../MinimalSelect'
import gc from '../../global-constants'


function PlayerRankControls(props) {
	// set state
  // create handlers
  // return rendered stuff
	return (
    <>
      <div className={classes.controlTitle}>
        Stat
      </div>
      <MinimalSelect {...{
        onChange: props.onChangeStat,
        value: props.stat,
        values: gc.STAT_TO_DISPLAY_NAME,
      }}/>
      <div className={classes.controlTitle}>
        Normalization
      </div>
      <MinimalSelect {...{
        onChange: props.onChangeNormalization,
        value: props.normalization,
        values: gc.NORMALIZATION_TO_DISPLAY_NAME,
      }}/>
      <div className={classes.controlTitle}>
        Reverse Results
      </div>
      <MinimalSelect {...{
        onChange: props.onChangeReverse,
        value: props.reverse,
        values: gc.REVERSE_VALUES,
      }}/>
      <div className={classes.controlTitle}>
        Number of Results
      </div>
      <MinimalSelect {...{
        onChange: props.onChangeLimit,
        value: props.limit,
        values: gc.LIMIT_VALUES,
      }}/>
      <div className={classes.buttonTitle}>
        {/* this space intentionally blank */}
      </div>
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
