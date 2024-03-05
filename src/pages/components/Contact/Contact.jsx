import React from "react";

const Contact = () => {
  return (
    <section id="contact">
      <div className="container">
        <div className="col-md-8 col-md-offset-2">
          <div className="heading">
            <h2>
              CONTACT <span>US</span>
            </h2>
            <div className="line"></div>
            <p>
              <span>
                <strong>F</strong>
              </span>
              eel free to reach out—I’d love to connect and discuss how we can
              collaborate!
            </p>
          </div>
        </div>
        <div className="text-center">
          <div className="col-md-6 col-sm-6 contact-sec-1">
            <h4>
              CONTACT IN<span>FO</span>
            </h4>
            <ul className="contact-form">
              <li>
                <i className="fa fa-map-marker"></i>
                <h6>
                  <strong>Address:</strong> Pringon , Cumilla, Bangladesh{" "}
                </h6>
              </li>
              <li>
                <i className="fa fa-envelope"></i>
                <h6>
                  <strong>Mail:</strong> <a href="#">md.imrulkayes6022@gmail.com</a>
                </h6>
              </li>
              <li>
                <i className="fa fa-phone"></i>
                <h6>
                  <strong>Phone:</strong> +880 1764-685852{" "}
                </h6>
              </li>
              <li>
                <i className="fa fa-wechat"></i>
                <h6>
                  <strong>Github:</strong> <a href="#">https://github.com/mdiktushar/</a>{" "}
                </h6>
              </li>
            </ul>
          </div>
          <div className="col-md-6 col-sm-6">
            <form
              id="main-contact-form"
              name="contact-form"
              method="post"
              action="#"
            >
              <div
                className="row  wow fadeInDown"
                data-wow-duration="1000ms"
                data-wow-delay="300ms"
              >
                <div className="col-sm-6">
                  <div className="form-group">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      placeholder="Name"
                      required="required"
                    />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      placeholder="Email Address"
                      required="required"
                    />
                  </div>
                </div>
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="subject"
                  className="form-control"
                  placeholder="Subject"
                  required="required"
                />
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  id="message"
                  className="form-control"
                  rows="4"
                  placeholder="Enter your message"
                  required="required"
                ></textarea>
              </div>
              <a className="btn-send col-md-12 col-sm-12 col-xs-12" href="#">
                Send Now
              </a>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
