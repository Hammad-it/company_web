import React, { useEffect, useRef, useState } from 'react'
import classes from '../../../styles/landingPage.module.css'
// import * as THREE from 'three'
// import GLOBE from 'vanta/dist/vanta.globe.min.js'
import Typewriter from 'typewriter-effect'
import Link from 'next/link'
// import { motion } from 'framer-motion'


const LandingPage = () => {
  // const [vantaEffect, setVantaEffcet] = useState(0);
  // const vantaRef = useRef(null);
  // useEffect(() => {
  //   if (!vantaEffect) {
  //     setVantaEffcet(
  //       GLOBE({
  //         el: vantaRef.current,
  //         THREE,
  //         color: 0x4288E8, // Blue globe color
  //         color2:0x4288E8,
  //         backgroundColor: 0xffffff, // White background
  //         size: 1.1, // Adjust globe size
  //         points: 15.0, // Number of points on the globe
  //         maxDistance: 20.0, // Maximum distance between points
  //         spacing: 15.0, // Distance between grid points
  //       })
  //     );
  //   }
  //   return () => {
  //     if (vantaEffect) vantaEffect.destroy();
  //   };
  // }, [vantaEffect]);
  

  return (
    // ref={vantaRef}
    <div className={`${classes.hero}`} id='home'>

      <div className={`${classes.hero__main}`}>
        
        <div className={`${classes.hero__text}`}>
          <h1 style={{color:'white'}}>Empowering Innovation, Transforming Ideas into Scalable

          </h1>
          <h1 style={{ color: "#4288E8" }}><Typewriter
            style={{ color: "#DFBFDF" }}
            options={{
              strings: ['Software.', 'Solutions.'],
              autoStart: true,
              loop: true,
            }}
          /></h1>

          <p style={{color:'white'}}>Let me know if you&apos;d like a different style! 😊</p>
          <Link href="/#contact" passHref>
  <a>
    <button>Contact Us</button>
  </a>
</Link>
        </div>
        <div className={`${classes.hero__image__main}`} >
        </div>
      </div>
    </div>
  )
}

export default LandingPage
