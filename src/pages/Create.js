import React from "react";

const Create = () => {
  return (
    <div>
      <>
        <div className="section-wrapper">
          <h1 className="text-center">GET IN TOUCH</h1>
          <div className="container">
            <div className="row mt-5 justify-content-center">
              <div className="col-md-6 address">
                <h3 className="head3">We would love to hear from you!</h3>
                <p className="pb-3">
                  Please write or call us with your questions or comments.
                </p>
                <h5 className="mb-0">Contact</h5>
                <div className="contact-row">
                  <div className="contact-list">
                    <div className="icon">
                      <img
                        src="https://readindia.info/ric/public/document/phone-icon.png "
                        style={{ height: 38 }}
                      />
                    </div>
                    <a href="tel:+91 8688 120 864">+91 9441456061</a>
                  </div>
                  <div className="contact-list">
                    <div className="icon">
                      <img
                        src="https://readindia.info/ric/public/document/email-icon.png"
                        style={{ height: 22, width: 28 }}
                      />
                    </div>
                    <a href="mailto:info@readindia.info">info@readindia.info</a>
                  </div>
                </div>
                <div className="social-group mt-4">
                  <h5>Keep In Touch</h5>
                  <ul className="list-unstyled socials">
                    <li>
                      <a
                        classname="facebook"
                        href=" "
                        target="_blank"
                      >
                        <img
                          src="https://readindia.info/ric/public/document/facebook.png"
                          style={{ height: 36 }}
                        />{" "}
                      </a>
                    </li>
                    <li>
                      <a
                        href=" "
                        target="_blank"
                      >
                        <img
                          src="https://readindia.info/ric/public/document/twitter.png"
                          style={{ height: 44 }}
                        />{" "}
                      </a>
                    </li>
                    <li>
                      <a
                        href=" "
                        target="_blank"
                      >
                        <img
                          src="https://readindia.info/ric/public/document/instagram.png"
                          style={{ height: 33 }}
                        />{" "}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6 col-lg-6 col-sm-12">
                <div className="contact_form">
                  <form className="row pt-4">
                    <div className="form-group col-md-6">
                      <label>
                        Your Name <span className="red-text">*</span>
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        className="form-control"
                        placeholder="Enter Full Name"
                        fdprocessedid="30nijp"
                      />
                    </div>
                    <div className="form-group col-md-6">
                      <label>
                        Email <span className="red-text ">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        className="form-control"
                        placeholder="Enter your email"
                        fdprocessedid="pyxy6d"
                      />
                    </div>
                    <div className="form-group col-md-6">
                      <label>
                        Phone <span className="red-text">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        className="form-control"
                        placeholder="Phone number"
                        fdprocessedid="eklnc"
                      />
                    </div>
                    <div className="form-group col-md-6">
                      <label>
                        Subject <span className="red-text">*</span>
                      </label>
                      <input
                        type="text"
                        name="subject"
                        className="form-control"
                        placeholder="Subject"
                        fdprocessedid="p1vld"
                      />
                    </div>
                    <div className="form-group col-md-12">
                      <label>
                        Write Query <span className="red-text">*</span>
                      </label>
                      <textarea
                        rows={3}
                        cols={3}
                        className="form-control"
                        placeholder="Write your query.."
                        name="query"
                        defaultValue={""}
                      />
                    </div>
                    <div className="form-group mt-2">
                      <button
                        type="submit"
                        className="btn btn-success btn-rounded btn-lg"
                        fdprocessedid="6gioq"
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default Create;
