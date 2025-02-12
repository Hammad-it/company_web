import React, { useState, useEffect } from "react";
import classes from "./navbar.module.css";
import { Link, animateScroll as scroll } from "react-scroll";

const NAV_LINK = [
  {
    path: 'home',
    display: 'Home',
  },

  {
    path: 'process',
    display: 'Process',
  },

  {
    path: 'services',
    display: 'Services',
  },
  {
    path: 'product',
    display: 'Products',
  },
  {
    path: 'about',
    display: 'About Us',
  },
  {
    path: 'blog',
    display: 'Blog',

  },

  {
    path: 'contact',
    display: 'Contact Us',
  },
]


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [color, setColor] = useState('transparent');
  const [textColor, setTextColor] = useState('#000');
  const [shadow, setShadow] = useState('');
  const [logo, setLogo] = useState('/logocomp.jpeg');
  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor('transparent');
        setTextColor('#000000')
        setShadow('rgba(0, 0, 0, 0.24) 0px 3px 8px');
        setLogo('/logocomp.jpeg');
      } else {
        setColor('transparent');
        setTextColor('#000');
        setShadow("");
        setIsOpen(false)
        setLogo('/logocomp.jpeg');


      }
    };
    window.addEventListener('scroll', changeColor);
  }, [])
  return (
    <div className={`${classes.Navbar}`} style={{ background: `${color}`, boxShadow: `${shadow}`, padding: '1rem' }}>
      <img src={logo} alt="texus" width="150px" height="150px" />
      {/* <h3 >Company logo</h3> */}
      <div className={[classes.nav_items, isOpen && classes.open].join(" ")}>
        {NAV_LINK.map((item, index) => (
          <Link key={index} onClick={() => setIsOpen(false)} style={{ color: isOpen ? '#000000' : `${textColor}` }} smooth={true} activeClass="active"
            to={item.path}
            spy={true}
            duration={300}>
            {item.display}</Link>

        ))}
      </div>
      <div className={`${classes.nav__quote}`} style={{ marginRight: "3rem" }}>
        <Link href='/#contact'>
          Cotact Us
        </Link>
      </div>

      <div
        className={[classes.nav_toggle, isOpen && classes.open].join(" ")}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className={`${classes.bar}`}>
        </div>
      </div>
    </div>
  );
};

export default Navbar;