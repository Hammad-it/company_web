import React from 'react'
import {motion} from 'framer-motion'
import classes from './motionwrap.module.css'

const MotionWrap = (Component, classNames) => function HOC() {
    return (
        <motion.div
          whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
          transition={{ duration: 0.5 }}
          className={[classNames, classes.app__flex].join(" ")}
        >
          <Component />
        </motion.div>
      );
    };
export default MotionWrap