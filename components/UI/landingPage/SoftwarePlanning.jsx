import React, { useState } from "react";
import classes from "../../../styles/softwareplanning.module.css";
import { motion } from "framer-motion";
import { AppWrap, MotionWrap } from "../../Wrappers";

const SoftwarePlanning = () => {
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  return (
    <div className={`${classes.sp__box_main}`} id="process">
      <div className={`${classes.sp__box_mainText}`}>
        <h1>Our Working Process</h1>
        <hr
          style={{
            borderTop: "3px solid #4288E8",
            width: "100px",
            margin: "1rem auto auto auto",
          }}
        />
      </div>
      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
      >
        <div className={`${classes.sp__main}`}>
          <div className={`${classes.sp__div1}`}>
            <div>
              <img src="/Strategy-Planning.jpg" alt="me" width="100%" height="auto" />
            </div>
            <h5>Strategy & Planning</h5>
            <p>
              We start by understanding your goals, analyzing requirements, and
              crafting a clear roadmap. This ensures a structured and efficient
              development process tailored to your needs.
            </p>
          </div>
          <div className={`${classes.sp__div2}`}>
            <div>
              <img src="/Design-Development.jpg" alt="me" width="100%" height="auto" />
            </div>
            <h5>Design {"&"} Development</h5>
            <p>
              Our team transforms ideas into visually appealing and functional
              solutions. With a user-centric approach, we design intuitive
              interfaces and develop robust applications using the latest
              technologies.
            </p>
          </div>
          <div className={`${classes.sp__div3}`}>
            <div>
              <img src="/Testing-Quality-Assurance.jpg" alt="me" width="100%" height="auto" />
            </div>
            <h5>Testing {"&"} Quality Assurance</h5>
            <p>
              Before deployment, we rigorously test every aspect of the software
              to ensure flawless performance, security, and scalability. Our
              goal is to deliver a bug-free and high-quality product.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AppWrap(
  MotionWrap(SoftwarePlanning, `${classes.sp__box_main}`),
  "process",
  "app__primarybg"
);
