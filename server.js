const express = require("express");
const cors = require("cors");
const graphqlHTTP = require("express-graphql");
const schema = require("./schema");
const HLTV = require("hltv-api");

const app = express();
app.use(cors());

app.get("/", function (req, res) {
  HLTV.getNews(function (news) {
    return res.json(news);
  });
});

app.get("/results", function (req, res) {
  HLTV.getResults(function (results) {
    return res.json(results);
  });
});

app.get("/allmatches", function (req, res) {
  HLTV.getAllMatches(function (stats) {
    return res.json(stats);
  });
});

app.get("/matches/:matchId", function (req, res) {
  HLTV.getMatches(req.params.matchId, function (stats) {
    return res.json(stats);
  });
});

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    graphiql: true,
  })
);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server is up at: ${PORT}`));
