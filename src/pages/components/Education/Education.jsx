import React from "react";
import twoBW from "../../../assets/img/two_bw.png";

const Education = () => {
  return (
    <section id="service">
      <div class="container">
        <div class="col-md-8 col-md-offset-2">
          <div class="heading">
            <h2>
              EDUCA<span>TION</span>
            </h2>
            <div class="line"></div>
            <p>
              <span>
                <strong>A</strong>
              </span>
              cademic Journey & Qualifications
            </p>
          </div>
        </div>
        <div class="experience">
          <div class="col-sm-6 col-xs-12">
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
                Chittagong University of Engineering and Technology:{" "}
                <span>CUET</span>
              </h3>
              <p style={{ textAlign: `left` }}>
                Master of Science (M.Sc.) (Part-Time),
                <br />
                Computer Science and Engineering (CSE),
                <br /> Sep 2022 - Present
              </p>
            </div>

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
                Bangladesh Army International University of Science and
                Technology:{` `}
                <span>BAIUST</span>
              </h3>
              <p style={{ textAlign: `left` }}>
                Bachelor of Science (B.Sc.)
                <br />
                Computer Science and Engineering (CSE),
                <br /> Oct 2017 - Nov 2021
                <br /> CGPA:{` `}<span>3.78</span>
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
              style={{ width: `350px` }}
              src={twoBW}
              class="img-responsive"
              alt=""
            />{" "}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
