import React from "react";

const ContactImg = () => {
  return (
    <>
      <div className="contact_img">
        <img
          id="light-box"
          src="/content/mailBox.svg"
          alt="mailbox"
          width="429.19px"
          height="312.41px"
        />
        <img
          id="dark-box"
          src="/content/mailBox-dark.svg"
          alt="mailbox"
          width="429.19px"
          height="312.41px"
        />
      </div>
    </>
  );
};

export default ContactImg;
