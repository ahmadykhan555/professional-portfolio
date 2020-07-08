import React from "react";
import "./Contact.scss";
import { ContactInfo } from "../../meta/meta";

interface ContactPageProps extends ContactInfo {}

const Contact: React.FC<ContactPageProps> = ({ message, email_address }) => {
  return (
    <div className="page contact-page ''" id="contact">
      <h2 className="page-title">Contact</h2>
      <div className="content">
        <div className="msg-container">
          <img src="https://via.placeholder.com/350" alt="" />
          <p>{message}</p>
        </div>
        <div className="contact-form">
          <form>
            <div className="form-item">
              <label>Name</label>
              <input placeholder="your name"></input>
            </div>
            <div className="form-item">
              <label>Message</label>
              <textarea placeholder="your message here"></textarea>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
