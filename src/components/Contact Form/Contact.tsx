import React, { useState, FormEvent } from "react";

import "./Contact.css"; // Import CSS file for styling

import API from "@aws-amplify/api";
import post from "@aws-amplify/api";

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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);

    const apiName = "formapi";
    const path = "/contact";
    const options = {
      body: {
        name: formData.name,
        email: formData.email,
        message: formData.comments,
      },
    };

    try {
      const { response } = await API.post({ apiName, path, options });

      console.log("Table Updated");
    } catch (err) {
      console.log(err);
    }

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
