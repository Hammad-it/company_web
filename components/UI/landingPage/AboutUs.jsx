import React from "react";
import classes from "../../../styles/aboutus.module.css";
import { AppWrap, MotionWrap } from "../../Wrappers";

const AboutUs = () => {
  return (
    <div className={`${classes.about__main}`} id="about">
      <h1>About Us</h1>
      <hr className={`${classes.divider}`} />
      <div className={`${classes.about__content}`}>
        <div className={`${classes.about__text}`}>
          <h4>Who We Are</h4>
          <p>
            SoftRevo is a dynamic software company that seamlessly integrates
            strategy, design, and engineering to deliver innovative digital
            solutions. Our mission is to empower businesses with cutting-edge
            technology, guiding them through every stage of their digital
            transformation.
          </p>
          <p>
            Founded in 2022, SoftRevo has rapidly grown into a team of
            passionate professionals who share a common vision for innovation
            and excellence. We take pride in developing high-quality software
            solutions that drive business success and technological advancement.
          </p>
          <p>
            With over three years of experience, our expertise spans multiple
            industries, including{" "}
            <strong>
              {" "}
              real estate, e-learning, healthcare, e-commerce, advertising,
              augmented reality, finance,
            </strong>{" "}
            and more. Our diverse portfolio showcases tailor-made solutions
            designed to meet the unique needs of each client.
          </p>
          <p>
            Today, with a dedicated team of 10+ professionals, we have
            successfully delivered 50+ projects to 25+ satisfied clients. What
            sets us apart is our unwavering commitment to building long-term
            partnerships and earning the trust of our clients through
            exceptional service and results.
          </p>
        </div>
        <div className={`${classes.about__images}`}>
          <img src="/aboutUs.png" alt="me" width="100%" height="auto" />
        </div>
      </div>
    </div>
  );
};
export default AppWrap(
  MotionWrap(AboutUs, `${classes.about__main}`),
  "about",
  "app__primarybg"
);
