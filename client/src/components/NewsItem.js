import React from "react";
import Moment from "react-moment";

const LaunchItem = ({
  singleNews: { title, description, link, date },
  // key,
}) => {
  //   console.log(launch);
  return (
    <div className="card card-cody mb-3">
      <div className="row">
        <div className="col-md-9">
          <h4 className="ml-2 text-primary">{title}: </h4>
          <p className="ml-2">{description}</p>
          <p className="ml-2 mt-1 mb-1 text-secondary font-italic">
            Date: <Moment format="YYYY-MM-DD HH:mm">{date}</Moment>
          </p>
        </div>
        <div className="col-md-3 mt-3 d-flex align-items-center justify-content-center">
          <a href={link} target="__blank">
            <strong>Go to HLTV for Details</strong>
          </a>
        </div>
      </div>
    </div>
  );
};

export default LaunchItem;
