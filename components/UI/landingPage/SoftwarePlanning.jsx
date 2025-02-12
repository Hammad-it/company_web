import React, { useState } from 'react'
import classes from '../../../styles/softwareplanning.module.css'
import { motion } from 'framer-motion';
import { AppWrap, MotionWrap } from '../../Wrappers';

const SoftwarePlanning = () => {
    const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
    return (
        <div className={`${classes.sp__box_main}`} id='process'>
            <div className={`${classes.sp__box_mainText}`}>
                <h1>Our Working Process</h1>
                <hr style={{
                    borderTop: "3px solid #4288E8",
                    width: "100px",
                    margin: "1rem auto auto auto"
                }} />
            </div>
            <motion.div
                animate={animateCard}
                transition={{ duration: 0.5, delayChildren: 0.5 }}>
                <div className={`${classes.sp__main}`}>
                    <div className={`${classes.sp__div1}`}>
                        <div>
                            <img src='/plan.jpg' alt="me" width="100%" height="auto" />
                        </div>
                        <h5>Planning</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>

                    </div>
                    <div className={`${classes.sp__div2}`}>
                        <div>
                            <img src='/design.jpg' alt="me" width="100%" height="auto" />
                        </div>
                        <h5>Design {'&'} Execution</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>


                    </div>
                    <div className={`${classes.sp__div3}`}>
                        <div>
                            <img src='/test.jpg' alt="me" width="100%" height="auto" />
                        </div>
                        <h5>Testing</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>

                    </div>
                </div>
            </motion.div>
        </div>
    )
}

export default AppWrap(
    MotionWrap(SoftwarePlanning, `${classes.sp__box_main}`),
    'process',
    'app__primarybg',
);