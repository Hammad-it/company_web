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
            Texus is a technology consulting organization that connects
            strategy, design and engineering services into a seamless workflow
            devised to support clients every step of the way.
          </p>
          <p>
            Founded in 2019, Texus rapidly became a large team of like-minded
            professionals with a shared vision for their company. The team is
            passionate about creating valuable products and helping other
            businesses climb the ladder of technological development.
          </p>
          <p>
            Over the past 02 years, we have designed and built a diverse range
            of high-quality products from scratch. Our specialists have
            expertise in a wide variety of spheres including real estate,
            e-learning, healthcare, e-commerce, advertising, augmented reality,
            finance, sharing economy, and many more.
          </p>
          <p>
            After 02 years of experience and a team of 10+ people, we stand more
            convinced than ever in our core expertise. Trusted by the leading
            companies. We have completed 300+ projects with 25+ clients. The
            thing we are most proud of is winning the confidence of our clients.
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
