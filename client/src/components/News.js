import React, { Fragment } from "react";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import NewsItem from "./NewsItem";
import Loader from "react-loader-spinner";
import Footer from "./Footer";
import uuid from "react-uuid";
import Navbar from "./Navbar";

const NEWS_QUERY = gql`
  query NewsQuery {
    news {
      title
      description
      link
      date
    }
  }
`;

const News = () => {
  const { loading, error, data } = useQuery(NEWS_QUERY);
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
        <h1 className="display-4 my-3  d-flex justify-content-center text-secondary">
          NEWS
        </h1>

        {data.news.map((singleNews) => (
          <NewsItem key={uuid()} singleNews={singleNews} />
        ))}
        <Footer />
      </Fragment>
    </div>
  );
};

export default News;
