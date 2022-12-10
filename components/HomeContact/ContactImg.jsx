import React from "react";
import MailBox from "../../assets/mailBox.svg";
import MailBoxDark from "../../assets/mailBox-dark.svg";

const ContactImg = () => {
  return (
    <>
      <div className="contact_img">
        <img
          id="light-box"
          src="/mailBox.svg"
          alt="mailbox"
          width="429.19px"
          height="312.41px"
        />
        <img
          id="dark-box"
          src="mailBox-dark.svg"
          alt="mailbox"
          width="429.19px"
          height="312.41px"
        />
      </div>
    </>
  );
};

export default ContactImg;
