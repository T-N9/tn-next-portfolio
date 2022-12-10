import React, { useState } from "react";
import { client } from "../../client";
import { motion } from "framer-motion";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    message: "",
  });

  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [isPaper, setIsPaper] = useState(false);

  const { username, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (username.length > 1 || email.length > 1 || message.length > 5) {
      setIsPaper(true);
    } else {
      setIsPaper(false);
    }

    if (username.length > 1 && email.length > 1 && message.length > 5) {
      setError(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username.length > 1 && email.length > 1 && message.length > 5) {
      setLoading(true);

      const contact = {
        _type: "contact",
        name: formData.username,
        email: formData.email,
        message: formData.message,
      };

      client
        .create(contact)
        .then(() => {
          setLoading(false);
          setIsFormSubmitted(true);
        })
        .catch((err) => console.log(err));

      setError(false);
    } else {
      setError(true);
    }
  };

  return (
    <>
      <div className="contact_form">
        <div className={`mail--paper ${isPaper ? "paper-on" : "paper-off"} ${isFormSubmitted && 'paper-sent'}`}>
          <p className="to">To Te Nyain</p>

          <p className="from">
            From : {username && username} <br />
            Mail : {email}
          </p>

          <textarea
            className="message"
            value={message}
            disabled
            name=""
            id=""
            cols="30"
            rows="4"
          ></textarea>
        </div>

        <h1 className="title_text">Get In Touch</h1>

        {!isFormSubmitted ? (
          <form onSubmit={handleSubmit} className="tn_form">
            <div className="head">
              <input
                className="tn_form_input"
                type="text"
                name="username"
                id="name"
                placeholder="Your Name"
                value={username}
                onChange={handleChangeInput}
              />
              <input
                className="tn_form_input"
                type="email"
                name="email"
                id="email"
                placeholder="Your Email"
                value={email}
                onChange={handleChangeInput}
              />
            </div>
            <textarea
              className="tn_form_input area"
              placeholder="Your Message"
              name="message"
              value={message}
              onChange={handleChangeInput}
            />

            <button type="submit" className="primary_btn">
              {!loading ? "Send Message" : "Sending..."}
            </button>

            {error ? (
              <p className="error-form">** Please fill completly. **</p>
            ) : (
              ""
            )}
          </form>
        ) : (
          <motion.div
            animate={{
              y: [65, 0],
            }}
            transition={{ duration: 1 }}
          >
            <div className="thankyou_txt">
              <h1>Thank you for reaching me.🤩</h1>
              <p>I will get back to you soon...</p>
            </div>
          </motion.div>
        )}
      </div>
    </>
  );
};

export default ContactForm;
