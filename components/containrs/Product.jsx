import React, { useState, useEffect } from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";

import { AppWrap, MotionWrap } from "../Wrappers";
import { urlFor, client } from "../clientSanity";
import classes from "./products.module.scss";

const Work = () => {
  const [works, setWorks] = useState([]);
  console.log("i am work", works);
  const [filterWork, setFilterWork] = useState([]);
  console.log("i am filterWork", filterWork);
  const [activeFilter, setActiveFilter] = useState("All");
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  const data = [
    {
      id: 0,
      description:
        "AsanRishta is a leading Matrimonial & Vendors service provider for Pakistanis worldwide, with the core objective to solve the problem of finding a match, by connecting people directly in a most secure, economical and convenient manner.Behind AsanRishta, is a team of talented engineers, designers, matchmakers and many more working in their domain to develop an excellent solution to serve our people around the world.",
      tags: "React JS",
      title: "AsanRishta",
      imgUrl:
        "https://www.asaanrishta.com/banner-img.c5d73896c9c5ed0feaef.webp",
      projectLink: "https://www.asaanrishta.com/",
    },
    {
      id: 1,
      description:
        "SplinterCoach is a dedicated platform designed to assist Splinterlands players in analyzing and improving their gameplay. By connecting your Splinterlands account to SplinterCoach, you can access detailed insights into your battle history, helping you understand the factors contributing to your victories and defeats.",
      tags: "Web App",
      title: "splintercoach",
      imgUrl: "https://i.ytimg.com/vi/vO_Vr6HA-z4/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCea7g6O-jW0rBybdGFVT81W2am7A",
      projectLink: "https://www.splintercoach.com/",
    },
    {
      id: 2,
      description:
        "Recruitzi provides an innovative and end-to-end software solution on a single platform for on-demand staffing agencies across North America. We have designed online web portals and mobile applications to manage staffing agency front offices, employee onboarding, and client management to simplify staffing and placement operations.",
      tags: "Web App",
      title: "Recruitzi",
      imgUrl: "https://recruitzi.com/wp-content/uploads/2022/05/All-In-One-Platform-For-Staffing-Business.webp",
      projectLink:
        "https://recruitzi.com/",
    },
  ];

  useEffect(() => {
    // const query = '*[_type == "works"]';

    // client.fetch(query).then((data) => {
    setWorks(data);
    setFilterWork(data);
    // });
  }, []);

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === "All") {
        setFilterWork(data);
      } else {
        setFilterWork(data.filter((work) => work.tags.includes(item)));
      }
    }, 500);
  };

  return (
    <div className={`${classes.products}`} id="product">
      <h1>Products</h1>
      <hr
        style={{
          borderTop: "3px solid #008bc9",
          width: "100px",
          margin: "1rem auto auto auto",
        }}
      />

      <div className={`${classes.app__work_filter}`}>
        {["UI/UX", "Web App", "Mobile App", "React JS", "All"].map(
          (item, index) => (
            <div
              key={index}
              onClick={() => handleWorkFilter(item)}
              className={[
                classes.app__work_filter_item,
                classes.app__flex,
                classes.p_text,
                activeFilter === item ? classes.item_active : "",
              ].join(" ")}
            >
              {item}
            </div>
          )
        )}
      </div>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className={`${classes.app__work_portfolio}`}
      >
        {filterWork.map((work, index) => (
          <div
            className={[classes.app__work_item, classes.app__flex].join(" ")}
            key={index}
          >
            <div
              className={[classes.app__work_img, classes.app__flex].join(" ")}
            >
              <img src={work.imgUrl} alt={work.name} />

              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{
                  duration: 0.25,
                  ease: "easeInOut",
                  staggerChildren: 0.5,
                }}
                className={[classes.app__work_hover, classes.app__flex].join(
                  " "
                )}
              >
                <a href={work.projectLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className={`${classes.app__flex}`}
                  >
                    <AiFillEye />
                  </motion.div>
                </a>
                <a href={work.codeLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className={`${classes.app__flex}`}
                  >
                    <AiFillGithub />
                  </motion.div>
                </a>
              </motion.div>
            </div>

            <div
              className={[classes.app__work_content, classes.app__flex].join(
                " "
              )}
            >
              <h4 className={`${classes.bold_text}`}>{work.title}</h4>
              <p className={`${classes.p_text}`} style={{ marginTop: 10 }}>
                {work.description}
              </p>

              <div
                className={[classes.app__work_tag, classes.app__flex].join(" ")}
              >
                <p className={`${classes.p_text}`}>{work.tags[0]}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default AppWrap(
  MotionWrap(Work, `${classes.app__works}`),
  "product",
  "app__primarybg"
);
