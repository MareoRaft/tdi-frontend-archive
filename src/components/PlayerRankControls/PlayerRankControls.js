import React from 'react'
import classNames from 'classnames'
import _ from 'lodash'
import {
  Button,
} from '@material-ui/core'
import {
  Close,
} from '@material-ui/icons'

import classes from './PlayerRankControls.module.css'
import MinimalSelect from '../MinimalSelect'
import gc from '../../global-constants'
import constants from './constants'


function Section(props) {
  return (
    <>
      <h3 {...{
        className: classes.sectionHeader,
      }}>
        {props.title}
      </h3>
      <p {...{
        className: classes.paragraph,
      }}>
        {props.description}
      </p>
    </>
  )
}

function Contents(props) {
  return <>
    <h2>{props.title}</h2>
    {_.map(props.sectionDict, (description, title) =>
      <Section {...{
        title,
        description,
      }}/>
    )}
  </>
}

function Overlay(props) {
  return <>
    <div {...{
      className: classNames({
        [classes.alertOverlay]: true,
        [classes.displayNone]: !props.showOverlay,
      }),
    }}>
      <div className={classes.closeOverlay}>
        <Close/>
      </div>
      <Contents {...{
        title: 'Normalization',
        sectionDict: constants.normalization,
      }}/>
    </div>
  </>
}

function PlayerRankControls(props) {
	// set state
  const is_alert_displayed = true
  // create handlers
  // return rendered stuff
	return (
    <>
      <Overlay {...{
        showOverlay: is_alert_displayed,
      }}/>
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
