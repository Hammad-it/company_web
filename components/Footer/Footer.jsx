import React from "react";
import { BsFacebook } from "react-icons/bs";
import { AiFillTwitterCircle, AiFillInstagram } from "react-icons/ai";
import { ImLinkedin } from "react-icons/im";
import Link from "next/link";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={`${classes.footer}`}>
      <div className={`${classes.footer_container}`}>
        <div className={`${classes.footer_row}`}>
          <div className={`${classes.footer_column}`}>
            <h3 style={{ color: "#fff" }}>SoftRevo.</h3>
            {/* <img src={'/logo3.png'} alt="SoftRevo" width={'200px'} height={'auto'} /> */}
            <p>
              SoftRevo is a UAE-based software company specializing in
              cutting-edge digital solutions. With over 3 years of experience,
              we are dedicated to empowering businesses with innovative software
              tailored to their needs.
            </p>
          </div>
          <div className={`${classes.footer_column}`}>
            <h3>Usefull Links</h3>
            <ul>
              <li>
                <Link href="#">Home</Link>
              </li>
              <li>
                <Link href="/#about">About Us</Link>
              </li>
              <li>
                <Link href="/#services">Services</Link>
              </li>
              <li>
                <Link href="#">Privacy Policy</Link>
              </li>
              <li>
                <Link href="#">Terms and Conditions</Link>
              </li>
            </ul>
          </div>
          <div className={`${classes.footer_column}`}>
            <h3>Our Services</h3>
            <ul>
              <li>
                <Link href="#">Software Design</Link>
              </li>
              <li>
                <Link href="#">Software Development</Link>
              </li>
              <li>
                <Link href="#">Data Analytics</Link>
              </li>
              <li>
                <Link href="#">Application Services</Link>
              </li>
              <li>
                <Link href="#">System Integration Service</Link>
              </li>
            </ul>
          </div>
          <div className={`${classes.footer_column}`}>
            <h3>Address</h3>
            <span style={{ margin: "20px 0px" }}>
              Riyadh ,Saudia street demy Data
            </span>
            <br />
            <span style={{ margin: "20px 0px" }}>
              <strong>Phone:</strong> <span>  +966 532626494</span>
            </span>
            <br />
            <span style={{ margin: "20px 0px" }}>
              <strong>Email:</strong> <span> info@SoftRevo.net</span>
            </span>
            <div className={`${classes.social_icons}`}>
              <div>
                <BsFacebook size={30} />
              </div>
              <div>
                <AiFillTwitterCircle size={40} />
              </div>
              <div>
                <AiFillInstagram size={40} />
              </div>
              <div>
                <ImLinkedin size={30} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`${classes.footer_cr}`}>
        <p>
          © Copyright <strong style={{ color: "#00b0ee" }}>SoftRevo.</strong>{" "}
          All Rights Reserved
        </p>
        <p>
          Designed by <strong style={{ color: "#00b0ee" }}>SoftRevo.</strong>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
