import React from 'react'
import classes from '../../../styles/counder.module.css'

const Counter = () => {
  return (
    <div style={{position: "relative"}}>
        <div className={`${classes.counter__bg_image}`}>
            <img src='/counter-bg.jpg' alt="texus" width="100%" height="auto"/>
        </div>
        <div style={{display: "flex", justifyContent: "space-between", padding: "4rem", backgroundColor:"black", opacity: 0.8,color: "white"}}>
            <div style={{textAlign:'center'}}>
                <h1>180</h1>
                <h4>Data Analytics</h4>
            </div>
            <div style={{textAlign:'center'}}>
                <h1>180</h1>
                <h4>Data Analytics</h4>
            </div>
            <div style={{textAlign:'center'}}>
                <h1>180</h1>
                <h4>Data Analytics</h4>
            </div>
            <div style={{textAlign:'center'}}>
                <h1>180</h1>
                <h4>Data Analytics</h4>
            </div>

        </div>
    </div>
  )
}

export default Counter