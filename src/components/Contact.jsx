import React from "react";
import { Link } from "react-router-dom";

const ContactUsPage = () => {
  return (
    <>
      <img
        className="background-img"
        src="https://thumbs.dreamstime.com/b/contact-us-background-businesses-email-call-message-landing-page-cover-icon-131608664.jpg"
        alt=""
      />
      <div
        className="container container-error py-3 position-absolute  text-white
    "
      >
        <h1 className="text-center mb-4">Contact Us</h1>
        <div className="row">
          <div className="col-md-6 mx-auto">
            <form>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Your Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email Address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea
                  className="form-control"
                  id="message"
                  rows="5"
                  placeholder="Enter your message"
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUsPage;
