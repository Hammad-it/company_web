import React, { useState, useEffect } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { motion } from "framer-motion";
import { urlFor, client } from "../../clientSanity";
import classes from "../../../styles/testimonials.module.css";
import { AppWrap, MotionWrap } from "../../Wrappers";

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [testimonials, setTestimonials] = useState([]);
  const [brands, setBrands] = useState([]);

  const handleClick = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const query = '*[_type == "testimonials"]';
    client.fetch(query).then((data) => {
      setTestimonials(data);
    });
  }, []);

  return (
    <div className={`${classes.testimonial_main}`}>
      <h1>Testimonials</h1>
      <hr
        style={{
          borderTop: "3px solid #008bc9",
          width: "100px",
          margin: "1rem auto 5rem auto",
        }}
      />
      <div className={`${classes.app__testimonial_main}`}>
        {testimonials.length && (
          <>
            <div className={`${classes.app__testimonial_item}`}>
              {" "}
              {/*app Flex*/}
              <img
                src={urlFor(testimonials[currentIndex].imgurl)}
                alt={testimonials[currentIndex].name}
              />
              <div className={`${classes.app__testimonial_content}`}>
                <p>{testimonials[currentIndex].feedback}</p>
                <div>
                  <h4>{testimonials[currentIndex].name}</h4>
                  <h5>{testimonials[currentIndex].company}</h5>
                </div>
              </div>
            </div>

            <div className={`${classes.app__testimonial_btns}`}>
              {/*app Flex*/}
              <div
                onClick={() =>
                  handleClick(
                    currentIndex === 0
                      ? testimonials.length - 1
                      : currentIndex - 1
                  )
                }
              >
                <HiChevronLeft />
              </div>

              <div
                onClick={() =>
                  handleClick(
                    currentIndex === testimonials.length - 1
                      ? 0
                      : currentIndex + 1
                  )
                }
              >
                <HiChevronRight />
              </div>
            </div>
          </>
        )}

        <div className={`${classes.app__testimonial_brands}`}>
          {" "}
          {/*app Flex*/}
          {brands.map((brand) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5, type: "tween" }}
              key={brand._id}
            >
              <img src={urlFor(brand.imgUrl)} alt={brand.name} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AppWrap(
  MotionWrap(Testimonial, `${classes.testimonial_main}`),
  "testimonial",
  "app__primarybg"
);
