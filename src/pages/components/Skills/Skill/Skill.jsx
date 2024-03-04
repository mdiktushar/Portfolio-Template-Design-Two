import React from "react";

const Skill = ({data}) => {
  return (
    <div
      className="col-md-4 col-sm-12 col-xs-12 wow fadeInUp"
      style={{ paddingRight: "40px" }}
      data-wow-duration="300ms"
      data-wow-delay="0ms"
    >
      <div className="media service-box">
        <div className="pull-left">
          {" "}
          <img
            style={{ width: "50px", height: "50px" }}
            src={data.image}
            alt=""
          />{" "}
        </div>
        <div className="media-body">
          <h5 className="media-heading">{data.name}</h5>
          <p>
           {data.details}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Skill;
