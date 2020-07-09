import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import News from "./components/News";
import Results from "./components/Results";

const client = new ApolloClient({
  uri: "/graphql",
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="container">
          <Route exact path="/" component={News} />
          <Route exact path="/results" component={Results} />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
