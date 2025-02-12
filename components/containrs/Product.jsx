import React, { useState, useEffect } from 'react';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../Wrappers';
import { urlFor, client } from '../clientSanity';
import classes from './products.module.scss';

const Work = () => {
  const [works, setWorks] = useState([]);
  const [filterWork, setFilterWork] = useState([]);
  const [activeFilter, setActiveFilter] = useState('All');
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  useEffect(() => {
    const query = '*[_type == "works"]';

    client.fetch(query).then((data) => {
      setWorks(data);
      setFilterWork(data);
    });
  }, []);

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === 'All') {
        setFilterWork(works);
      } else {
        setFilterWork(works.filter((work) => work.tags.includes(item)));
      }
    }, 500);
  };

  return (
    <div className={`${classes.products}`} id='product'>
      <h1>Products</h1>
        <hr style={{ borderTop: "3px solid #008bc9",
          width: "100px",
          margin: "1rem auto auto auto"}}/>

      <div className={`${classes.app__work_filter}`}>
        {['UI/UX', 'Web App', 'Mobile App', 'React JS', 'All'].map((item, index) => (
          <div
            key={index}
            onClick={() => handleWorkFilter(item)}
            className={[classes.app__work_filter_item, classes.app__flex, classes.p_text, activeFilter === item ? classes.item_active : ''].join(" ")}
          >
            {item}
          </div>
        ))}
      </div>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className={`${classes.app__work_portfolio}`}
      >
        {filterWork.map((work, index) => (
          <div className={[classes.app__work_item, classes.app__flex].join(" ")} key={index}>
            <div
              className={[classes.app__work_img, classes.app__flex].join(" ")}
            >
              <img src={urlFor(work.imgUrl)} alt={work.name} />

              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                className={[classes.app__work_hover, classes.app__flex].join(" ")}
              >
                <a href={work.projectLink} target="_blank" rel="noreferrer">

                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.90] }}
                    transition={{ duration: 0.25 }}
                    className={`${classes.app__flex}`}
                  >
                    <AiFillEye />
                  </motion.div>
                </a>
                <a href={work.codeLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.90] }}
                    transition={{ duration: 0.25 }}
                    className={`${classes.app__flex}`}
                  >
                    <AiFillGithub />
                  </motion.div>
                </a>
              </motion.div>
            </div>

            <div className={[classes.app__work_content, classes.app__flex].join(" ")}>
              <h4 className={`${classes.bold_text}`}>{work.title}</h4>
              <p className={`${classes.p_text}`} style={{ marginTop: 10 }}>{work.description}</p>

              <div className={[classes.app__work_tag, classes.app__flex].join(" ")}>
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
  'product',
  'app__primarybg',
);