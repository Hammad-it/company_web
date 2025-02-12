import React from 'react'
import classes from '../../../styles/services.module.css'
import { AppWrap, MotionWrap } from '../../Wrappers'

const SERVICES = [
    {
        service: "Software Development"
    },
    {
        service: "Automatic Optimization"
    },
    {
        service: "Application Services"
    },
    {
        service: "Data Analytics"
    },
    {
        service: "IT Security Services"
    },
    {
        service: "System Integration Service"
    },
    {
        service: "Help Desk Services"
    },
    {
        service: "API Integration Service"
    },
]

const Services = () => {
    return (
        <div className={`${classes.service}`} id='services'>
            <h1>Services</h1>
            <hr style={{
                borderTop: "3px solid #4288E8",
                width: "100px",
                margin: "1rem auto auto auto"
            }} />
            <div className={`${classes.service__main}`}>
                <div className={`${classes.service__featured}`}>
                    <p>Our featured Services</p>
                    <h1 style={{ marginBottom: "2rem" }}>Software Developement Services</h1>
                    <div className={`${classes.service__featured__main}`}>
                        {SERVICES.map((data, index) =>
                            <div key={index} className={`${classes.service__featured__sub}`}>
                                <h5>{data.service}</h5>
                            </div>
                        )}
                    </div>
                </div>
                <div className={`${classes.service__image}`}>
                    <img src='/sdProcess.png' alt="me" width="80%" height="auto" />
                </div>
            </div>
        </div>
    )
}

export default AppWrap(
    MotionWrap(Services, `${classes.service}`),
    'services',
    'app__primarybg',
);