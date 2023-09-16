import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import { send } from "emailjs-com";

function Contact() {
  const [toSend, setToSend] = useState({
    from_name: "",
    email: "",
    message: "",
  });

  const [btnDisabled, setBtnDisabled] = useState(true);

  const onSubmit = (e) => {
    e.preventDefault();

    send("service_tk9redv", "template_1z3mqpi", toSend, "jEMInB3HyEDC_THeO")
      .then((res) => {
        toast.success("Email sent, thankyou.");
        console.log("success", res.status, res.text);
      })
      .catch((err) => {
        toast.error("Failed to send please try again");
        console.log("Failed", err);
      });
    setToSend("");
  };

  const handleChange = ({ target: { name, value } }) => {
    if (value === "") {
      setBtnDisabled(true);

      setToSend((prevState) => ({ [name]: value }));
    } else {
      setBtnDisabled(false);
      setToSend({ ...toSend, [name]: value });
    }
  };

  return (
    <div className="contacts-container">
      <div className="sub-header">
        <h1>Contact</h1>
        <div className="sub-header_underline_contact"></div>
      </div>
      <form onSubmit={onSubmit} id="contact-form" action="">
        <div className="form-container">
          <h1>
            {" "}
            Feel free to get in contact by submitting the form below and I will
            get back to you as soon as possible.
          </h1>
          <div className="form-info">
            <input
              type="text"
              className="form-control"
              placeholder="Enter your name"
              name="from_name"
              value={toSend.from_name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-info">
            <input
              type="email"
              className="form-control"
              placeholder="Enter your email"
              name="email"
              value={toSend.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-info">
            <textarea
              type="text"
              className="form-control-message"
              placeholder="Enter your message"
              name="message"
              value={toSend.message}
              onChange={handleChange}
              required
            />
          </div>
          <button className="submit-btn" disabled={btnDisabled} type="submit">
            Send
          </button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
