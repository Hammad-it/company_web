import React from 'react';
import  NavigationDots from  '../stylingComponents/NavigationDots';
import SocialMedia from '../stylingComponents/socialMedia';
import classes from './appwrap.module.scss'

const AppWrap = (Component, idName, classNames) => function HOC() {
  return (
    <div id={idName} className={[classes.app__container, classNames].join(" ")}>
      {/* <SocialMedia/> */}
      <div className={[classes.app__wrapper, classes.app__flex].join(" ")}>
        <Component />

        <div className={`${classes.copyright}`}>
          {/* <p className="p-text">@2022 Texus</p>
          <p className="p-text">All rights reserved</p> */}
        </div>
      </div>
      <NavigationDots active={idName} />
    </div>
  );
};

export default AppWrap;