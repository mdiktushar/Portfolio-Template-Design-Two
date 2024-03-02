import React from "react";
import laravel from "../../../assets/img/skills/laravel.png";
import react from "../../../assets/img/skills/react.png";
import js from "../../../assets/img/skills/js.png";
import php from "../../../assets/img/skills/php.png";
import mongodb from "../../../assets/img/skills/mongodb.png";
import sql from "../../../assets/img/skills/sql.png";

const Skills = () => {
  return (
    <section id="service">
      <div className="container">
        <div className="col-md-8 col-md-offset-2">
          <div className="heading">
            <h2>
              Ski
              <span>lls</span>
            </h2>
            <div className="line"></div>
            <p>
              <span>
                <strong>D</strong>
              </span>
              ive into my skill set – a curated collection of expertise designed
              to bring your projects to new heights.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="features-sec">
            <div
              className="col-md-4 col-sm-6 col-xs-6 wow fadeInUp"
              style={{ paddingRight: "40px" }}
              data-wow-duration="300ms"
              data-wow-delay="0ms"
            >
              <div className="media service-box">
                <div className="pull-left">
                  {" "}
                  <img
                    style={{ width: "50px", height: "50px" }}
                    src={laravel}
                    alt=""
                  />{" "}
                </div>
                <div className="media-body">
                  <h5 className="media-heading">Laravel</h5>
                  <p>
                    A PHP web application framework known for its elegant syntax
                    and robust features, facilitating rapid development of web
                    applications.
                  </p>
                </div>
              </div>
            </div>
            {/* <!--/.col-md-4--> */}
            <div
              className="col-md-4 col-sm-6 col-xs-6 wow fadeInUp"
              style={{ paddingRight: "40px" }}
              data-wow-duration="300ms"
              data-wow-delay="100ms"
            >
              <div className="media service-box">
                <div className="pull-left">
                  {" "}
                  <img
                    style={{ width: "50px", height: "50px" }}
                    src={react}
                    alt=""
                  />{" "}
                </div>
                <div className="media-body">
                  <h5 className="media-heading">React</h5>
                  <p>
                    A JavaScript library for building user interfaces, developed
                    by Facebook. It allows developers to create interactive UI
                    components for web and mobile applications.
                  </p>
                </div>
              </div>
            </div>
            {/* <!--/.col-md-4--> */}
            <div
              className="col-md-4 col-sm-6 col-xs-6 wow fadeInUp"
              style={{ paddingRight: "40px" }}
              data-wow-duration="300ms"
              data-wow-delay="0ms"
            >
              <div className="media service-box">
                <div className="pull-left">
                  {" "}
                  <img
                    style={{ width: "50px", height: "50px" }}
                    src={php}
                    alt=""
                  />{" "}
                </div>
                <div className="media-body">
                  <h5 className="media-heading">PHP</h5>
                  <p>
                    A server-side scripting language commonly used for web
                    development. It is widely known for its simplicity and
                    ability to embed within HTML.
                  </p>
                </div>
              </div>
            </div>
            {/* <!--/.col-md-4--> */}
            <div
              className="col-md-4 col-sm-6 col-xs-6 wow fadeInUp"
              style={{ paddingRight: "40px" }}
              data-wow-duration="300ms"
              data-wow-delay="300ms"
            >
              <div className="media service-box">
                <div className="pull-left">
                  {" "}
                  <img
                    style={{ width: "50px", height: "50px" }}
                    src={js}
                    alt=""
                  />{" "}
                </div>
                <div className="media-body">
                  <h5 className="media-heading">JavaScript</h5>
                  <p>
                    A programming language primarily used for web development to
                    create interactive and dynamic content.
                  </p>
                </div>
              </div>
            </div>
            {/* <!--/.col-md-4--> */}
            <div
              className="col-md-4 col-sm-6 col-xs-6 wow fadeInUp"
              style={{ paddingRight: "40px" }}
              data-wow-duration="300ms"
              data-wow-delay="400ms"
            >
              <div className="media service-box">
                <div className="pull-left">
                  {" "}
                  <img
                    style={{ width: "50px", height: "50px" }}
                    src={sql}
                    alt=""
                  />{" "}
                </div>
                <div className="media-body">
                  <h5 className="media-heading">SQL</h5>
                  <p>
                    Structured query language (SQL) is a programming language
                    for storing and processing information in a relational
                    database.
                  </p>
                </div>
              </div>
            </div>
            {/* <!--/.col-md-4--> */}
            <div
              className="col-md-4 col-sm-6 col-xs-6 wow fadeInUp"
              style={{ paddingRight: "40px" }}
              data-wow-duration="300ms"
              data-wow-delay="500ms"
            >
              <div className="media service-box">
                <div className="pull-left">
                  {" "}
                  <img
                    style={{ width: "50px", height: "50px" }}
                    src={mongodb}
                    alt=""
                  />{" "}
                </div>
                <div className="media-body">
                  <h5 className="media-heading">MongoDB</h5>
                  <p>
                    A NoSQL database using JSON-like documents, with optional
                    schemas, source-available and cross-platform.
                  </p>
                </div>
              </div>
            </div>
            {/* <!--/.col-md-4--> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
