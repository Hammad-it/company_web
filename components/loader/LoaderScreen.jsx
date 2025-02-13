import React from 'react'
import classes from './loader.module.css'

const LoaderScreen = ({loader}) => {
  return (
    <div className={`${classes.loader__main}`} id="loaderScreen" style={{display: loader? "flex" : "none"}}>
        {/* <img src="./loader.gif" alt="texus-loader" width='80%' height='auto' /> */}
        <h1>SoftRevo</h1>
    </div>
  )
}

export default LoaderScreen