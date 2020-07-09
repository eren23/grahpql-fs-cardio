import React from "react";
import classNames from "classnames";

const LaunchItem = ({
  singleResult: { event, maps, team1, team2, matchId },
  // key,
}) => {
  //   console.log(launch);
  return (
    <div className="card card-cody mb-3">
      <div className="row justify-content-md-center">
        <div className="col-md-9">
          <h4 className="ml-2">Event: {event} </h4>
          <p className="ml-2 text-uppercase">Map type: {maps}</p>
          <p className="ml-2 text-uppercase">
            <span
              className={classNames({
                "text-success": team1.result > team2.result, //if launch succes is true add this class
                "text-danger": team1.result < team2.result,
              })}
            >
              <img className="w-25 h-25" src={team1.crest} alt="" />
              {team1.name}
              <strong> &nbsp; {team1.result}</strong>{" "}
            </span>
            &nbsp; vs &nbsp;
            <span
              className={classNames({
                "text-success": team1.result < team2.result, //if launch succes is true add this class
                "text-danger": team1.result > team2.result,
              })}
            >
              <strong>{team2.result}&nbsp;</strong>
              <strong>
                {" "}
                {team2.name}
                <img className="w-25 h-25 ml-3" src={team2.crest} alt="" />{" "}
              </strong>{" "}
            </span>
          </p>
        </div>
        <div className="col-md-3 mt-3 d-flex align-items-center justify-content-center">
          <a href={`https://www.hltv.org${matchId}`} target="__blank">
            {" "}
            <strong>Go to HLTV for Details</strong>
          </a>
        </div>
      </div>
    </div>
  );
};

export default LaunchItem;
