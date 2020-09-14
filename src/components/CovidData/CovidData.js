import React from 'react'

import classes from './CovidData.module.css'
import Spinner from '../Spinner/Spinner'



const CovidData = ( props ) => {
  let backgroundStyles = {
    backgroundColor: '',
  }
  switch (props.title) {
    case 'GJITHSEJ RASTE':
      backgroundStyles = {backgroundColor: '#5b9eeb'}
      break
    case 'TE SHERUAR':
      backgroundStyles = {backgroundColor: '#b3dec1'}
      break
      case 'ME FATALITET':
        backgroundStyles = {backgroundColor: '#808080'}
        break
        case 'AKTIVE':
          backgroundStyles = {backgroundColor: '#f5ad42'}
          break
    default: backgroundStyles={backgroundColor: '#925beb'}
  }
  return (
    <div className={classes.CovidData}>
      <p className={classes.Head} style={backgroundStyles}>{ props.title }</p>
      <i className={props.icon} />
      { 
        props.loading ? 
        <Spinner /> : 
        <p className={classes.Cases}> {props.casesNumber} </p> 
      }
    </div>
  )
}


export default CovidData