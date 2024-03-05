import React from "react";

const Footer = () => {
  return (
    <div>
      <footer id="footer">
        <div className="bg-sec">
          <div className="container">
            <h2>
              LOOKING FORWARD TO <strong>HEARING </strong>FROM YOU!
            </h2>
          </div>
        </div>
      </footer>
      <footer id="footer-down">
        <h2>Follow Us On</h2>
        <ul className="social-icon">
          <li className="facebook hvr-pulse">
            <a href="https://www.facebook.com/mdiktushar">
              <i className="fa fa-facebook-f"></i>
            </a>
          </li>
          <li className="twitter hvr-pulse">
            <a href="https://twitter.com/MDIKTushar">
              <i className="fa fa-twitter"></i>
            </a>
          </li>
          <li className="linkedin hvr-pulse">
            <a href="https://www.linkedin.com/in/mdimrulkayestushar/">
              <i className="fa fa-linkedin"></i>
            </a>
          </li>
          <li className="instagram hvr-pulse">
            <a href="https://www.instagram.com/mdiktushar/">
              <i className="fa fa-instagram"></i>
            </a>
          </li>
        </ul>
        <p>
          {" "}
          &copy; Md. imrul kayes 2024
        </p>
      </footer>
    </div>
  );
};

export default Footer;
