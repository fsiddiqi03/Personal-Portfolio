// Contact.tsx

import React, { useState } from "react";
import "./Contact.css"; // Import CSS file for styling

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    comments: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      name: "",
      email: "",
      comments: "",
    });
  };

  return (
    <div className="contact-container">
      <div className="contact-form-box">
        <form onSubmit={handleSubmit}>
          <div className="contact-form-floating">
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
            />
            <label htmlFor="name"></label>
          </div>
          <div className="contact-form-floating">
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              placeholder="name@example.com"
              value={formData.email}
              onChange={handleChange}
            />
            <label htmlFor="email"></label>
          </div>
          <div className="contact-form-floating">
            <textarea
              className="form-control"
              placeholder="Leave a comment here"
              id="comments"
              name="comments"
              value={formData.comments}
              onChange={handleChange}
            ></textarea>
            <label htmlFor="comments"></label>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
