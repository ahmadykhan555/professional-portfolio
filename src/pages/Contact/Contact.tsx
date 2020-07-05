import React from "react";
import "./Contact.scss";

const Contact: React.FC<any> = () => {
  return (
    <div className="page contact-page ''" id="contact">
      <h2 className="page-title">Contact</h2>
      <div className="content">
        <div className="image-container"></div>
        <div className="contact-form"></div>
      </div>
    </div>
  );
};

export default Contact;
