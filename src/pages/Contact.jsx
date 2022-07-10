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
      <header className="sub-header">Contact</header>
      <form onSubmit={onSubmit} id="contact-form" action="">
        <div className="form-container">
          <h1>Have any questions or want to work together?</h1>
          <h2>Please get in touch.</h2>
          <div className="form-info">
            <input
              type="text"
              className="form-control"
              placeholder="Name"
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
              placeholder="Email"
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
              placeholder="MESSAGE"
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
