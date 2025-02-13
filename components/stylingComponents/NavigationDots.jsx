import React from 'react';
import classes from './navigationDots.module.scss'

const NavigationDots = ({ active }) => (
  <div className={`${classes.app__navigation}`}>
    {['process', 'services', 'product', 'testimonial', 'about', 'team', 'contact'].map((item, index) => (
      <a
        href={`#${item}`}
        key={item + index}
        className={`${classes.app__navigation_dot}`}
        style={active === item ? { backgroundColor: '#4288E8' } : {}}
      />
    ))}
  </div>
);

export default NavigationDots;