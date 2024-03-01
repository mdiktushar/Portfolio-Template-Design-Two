import React from "react";
import profesional from "../../../assets/img/profesional.png";

const Expriance = () => {
  return (
    <section id="expriance">
      <div id="service">
        <div class="container">
          <div class="col-md-8 col-md-offset-2">
            <div class="heading">
              <h2>
                EXPRI<span>ANCE</span>
              </h2>
              <div class="line"></div>
              <p>
                <span>
                  <strong>P</strong>
                </span>
                rofessional Journey & Achievements
              </p>
            </div>
          </div>
          <div class="experience">
            <div class="col-sm-6 col-xs-12">
              {/* Postgraduate Student Researcher */}
              <div
                class="single-skill wow fadeInLeft"
                data-wow-duration="1000ms"
                data-wow-delay="600ms"
              >
                <h3
                  class="lead"
                  style={{
                    marginBottom: `none`,
                    borderBottom: "none",
                    paddingBottom: `none`,
                  }}
                >
                  <span>Postgraduate Student Researcher</span>
                </h3>
                <p style={{ textAlign: `left` }}>
                  Chittagong University of Engineering & Technology:{` `}
                  <span>CUET</span>
                  <br />
                  Part-time
                  <br />
                  Deep Learning:{` `}Generative Adversarial Networks{" "}
                  <span>(GANs)</span>
                  <br /> Sep 2022 - Present{` `}
                  <span>Hybrid</span>
                </p>
              </div>
              {/* Undergraduate Student Researcher */}
              <div
                class="single-skill wow fadeInLeft"
                data-wow-duration="1000ms"
                data-wow-delay="600ms"
              >
                <h3
                  class="lead"
                  style={{
                    marginBottom: `none`,
                    borderBottom: "none",
                    paddingBottom: `none`,
                  }}
                >
                  <span>Undergraduate Student Researcher</span>
                </h3>
                <p style={{ textAlign: `left` }}>
                  Bangladesh Army International University of Science and
                  Technology:{` `}
                  <span>BAIUST</span>
                  <br />
                  Full-time
                  <br />
                  Machine Learning, Deep Learning:{` `}
                  Convolutional Neural Network{` `}
                  <span>(CNN)</span>
                  <br /> Oct 2020 - Oct 2021{` `}
                  <span>Hybrid</span>
                </p>
              </div>
              {/* OCPL */}
              <div
                class="single-skill wow fadeInLeft"
                data-wow-duration="1000ms"
                data-wow-delay="600ms"
              >
                <h3
                  class="lead"
                  style={{
                    marginBottom: `none`,
                    borderBottom: "none",
                    paddingBottom: `none`,
                  }}
                >
                  <span>PHP & Laravel Developer (Internship)</span>
                </h3>
                <p style={{ textAlign: `left` }}>
                  Business Automation Ltd{` `}·
                  <br />
                  Part-time <br />
                  Machine Learning, Deep Learning:{` `}
                  Convolutional Neural Network <span>(CNN)</span>
                  <br />
                  Jul 2021 - Sep 2021{` `}
                  <span>Online</span>
                </p>
              </div>
            </div>
            <div
              class="col-sm-6  wow fadeInUp"
              data-wow-duration="1000ms"
              data-wow-delay="600ms"
            >
              {" "}
              <img
                style={{ width: `500px` }}
                src={profesional}
                class="img-responsive"
                alt=""
              />{" "}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expriance;
