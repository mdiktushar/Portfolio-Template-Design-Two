import React, { useEffect, useState } from "react";

const Banner = () => {
  const [banner, setBanner] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/data/banner.json");
        const result = await response.json();
        setBanner(result);
      } catch (error) {
        console.error(`Error while banner fetching: ${error}`);
      }
    };
    fetchData();
    return () => {};
  }, []);

  if (banner) {
    return (
      <section id="slider">
        <div id="home-carousel" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            {/* Slide One Start */}
            <div
              className="item active"
              style={{ backgroundImage: `url(${banner[0].image})` }}
            >
              <div className="carousel-caption container">
                <div className="row">
                  <div className="col-md-7 col-sm-12 col-xs-12">
                    <h1>{banner[0].heading}</h1>
                    <h2>{banner[0].subheading}</h2>
                    <p>{banner[0].message}</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Slide Two Start */}
            <div
              className="item"
              style={{ backgroundImage: `url(${banner[1].image})` }}
            >
              <div className="carousel-caption container">
                <div className="row">
                  <div className="col-md-7 col-sm-12 col-xs-12">
                    <h1>{banner[1].heading}</h1>
                    <h2>{banner[1].subheading}</h2>
                    <p>{banner[1].message}</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Slide Three Start */}
            <div
              className="item"
              style={{ backgroundImage: `url(${banner[2].image})` }}
            >
              <div className="carousel-caption container">
                <div className="row">
                  <div className="col-md-7 col-sm-12 col-xs-12">
                  <h1>{banner[2].heading}</h1>
                    <h2>{banner[2].subheading}</h2>
                    <p>{banner[2].message}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <a
              className="home-carousel-left"
              href="#home-carousel"
              data-slide="prev"
            >
              <i className="fa fa-angle-left"></i>
            </a>
            <a
              className="home-carousel-right"
              href="#home-carousel"
              data-slide="next"
            >
              <i className="fa fa-angle-right"></i>
            </a>
          </div>
        </div>
      </section>
    );
  } else {
    return (
      <button class="btn btn-primary" type="button" disabled>
        <span
          class="spinner-grow spinner-grow-sm"
          role="status"
          aria-hidden="true"
        ></span>
        Loading...
      </button>
    );
  }
};

export default Banner;
