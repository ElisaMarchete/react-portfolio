import React, { useState } from "react";

import { validateEmail } from "../../utils/helpers";

function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "", // Add phone number field
    message: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const { name, email, phone, message } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      console.log("Submit Form", formState);
    }
  };

  const handleChange = (e) => {
    if (e.target.name === "email") {
      const isValidEmail = validateEmail(e.target.value);
      if (!isValidEmail) {
        setErrorMessage("Your email is invalid.");
      } else {
        setErrorMessage("");
      }
    } else if (e.target.name === "phone") {
      // Add phone number validation if needed
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage("");
      }
    }

    setFormState({ ...formState, [e.target.name]: e.target.value });
    console.log("Handle Form", formState);
  };

  return (
    <section>
      <div>
        <p>Phone: 647-555-555</p>
        <p>Email: elisamarchete@gmail.com</p>
      </div>

      <form id="contact-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            defaultValue={name}
            onBlur={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email address:</label>
          <input
            type="email"
            name="email"
            defaultValue={email}
            onBlur={handleChange}
          />
        </div>
        <div>
          <label htmlFor="phone">Phone number:</label>
          <input
            type="tel"
            name="phone"
            defaultValue={phone}
            onBlur={handleChange}
          />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            name="message"
            rows="5"
            defaultValue={message}
            onBlur={handleChange}
          />
        </div>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default Contact;
