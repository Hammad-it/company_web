import React, { useState } from 'react';

// import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../Wrappers';
import { client } from '../clientSanity';
import classes from './contact.module.scss';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { username, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: 'contact',
      name: formData.username,
      email: formData.email,
      message: formData.message,
    };

    client.create(contact)
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className={`${classes.app__footer}`} id='contact'>
     <h2>Contact Us</h2>
     <hr style={{ borderTop: "3px solid #4288E8",
                            width: "100px",
                            margin: "1rem auto auto auto"}}/>
      <div className={`${classes.app__footer_cards}`}>
        <div className={`${classes.app__footer_card}`}>
          <img src='./email.png' alt="email" />
          <a href="texus:info@texus.co.uk" className={`${classes.p_text}`} >info@company.com</a>
        </div>
        <div className={`${classes.app__footer_card}`}>
          <img src='/mobile.png' alt="phone" />
          <a href="tel:+92 (311) 4537947" className={`${classes.p_text}`} >+92 (311) 453-7947</a>
        </div>
      </div>
      {!isFormSubmitted ? (
        <div className={[classes.app__footer_form, classes.app__flex].join(" ")}>
          <div className={`${classes.app__flex}`}>
            <input className={`${classes.p_text}`} type="text" placeholder="Your Name" name="username" value={username} onChange={handleChangeInput} />
          </div>
          <div className={`${classes.app__flex}`}>
            <input className={`${classes.p_text}`}  type="email" placeholder="Your Email" name="email" value={email} onChange={handleChangeInput} />
          </div>
          <div>
            <textarea
              className={`${classes.p_text}`} 
              placeholder="Your Message"
              value={message}
              name="message"
              onChange={handleChangeInput}
            />
          </div>
          <button type="button" className={`${classes.p_text}`}  onClick={handleSubmit}>{!loading ? 'Send Message' : 'Sending...'}</button>
        </div>
      ) : (
        <div>
          <h3 className={`${classes.head_text}`} >
            Thank you for getting in touch!
          </h3>
        </div>
      )}
    </div>
  );
};

export default AppWrap(
  MotionWrap(Contact, 'app__footer'),
  'contact',
  'app__whitebg',
);