import React, { Fragment } from "react";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import ResultItem from "./ResultItem";
import Loader from "react-loader-spinner";
import Footer from "./Footer";
import uuid from "react-uuid";
import Navbar from "./Navbar";

const RESULT_QUERY = gql`
  query ResultQuery {
    results {
      event
      maps
      team1 {
        name
        crest
        result
      }
      team2 {
        name
        crest
        result
      }
      matchId
    }
  }
`;

const Results = () => {
  const { loading, error, data } = useQuery(RESULT_QUERY);
  if (loading)
    return (
      <Loader
        type="Grid"
        color="grey"
        height={100}
        width={100}
        timeout={3000} //3 secs
        style={{
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          position: "absolute",
        }}
      />
    );
  if (error) return <h1>Error.</h1>;
  return (
    <div>
      <Fragment>
        <Navbar />
        <h1 className="display-4 my-3 d-flex justify-content-center text-secondary">
          RESULTS
        </h1>

        {data.results.map((singleResult) => (
          <ResultItem key={uuid()} singleResult={singleResult} />
        ))}
        <Footer />
      </Fragment>
    </div>
  );
};

export default Results;
