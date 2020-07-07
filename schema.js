const axios = require("axios");
const HLTV = require("hltv-api");

const {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
  GraphQLSchema,
} = require("graphql");

//----GraphQL Types----
const NewsType = new GraphQLObjectType({
  name: "News",
  fields: () => ({
    title: { type: GraphQLString },
    description: { type: GraphQLString },
    link: { type: GraphQLString },
    date: { type: GraphQLString },
  }),
});

const ResultsType = new GraphQLObjectType({
  name: "Results",
  fields: () => ({
    event: { type: GraphQLString },
    maps: { type: GraphQLString },
    team1: { type: TeamType },
    team2: { type: TeamType },
    matchId: { type: GraphQLString },
  }),
});

const TeamType = new GraphQLObjectType({
  name: "Team",
  fields: () => ({
    name: { type: GraphQLString },
    crest: { type: GraphQLString },
    result: { type: GraphQLInt },
  }),
});

const MatchesType = new GraphQLObjectType({
  name: "Matches",
  fields: () => ({
    id: { type: GraphQLInt },
    link: { type: GraphQLString },
    time: { type: GraphQLString },
    event: { type: EventType },
    stars: { type: GraphQLInt },
    map: { type: GraphQLString },
  }),
});

const EventType = new GraphQLObjectType({
  name: "Event",
  fields: () => ({
    name: { type: GraphQLInt },
    crest: { type: GraphQLString },
  }),
});

const SingleMatch = new GraphQLObjectType({
  name: "SingleMatch",
  fields: () => ({
    playerName: { type: GraphQLString },
    playerId: { type: GraphQLString },
    kills: { type: GraphQLInt },
    deaths: { type: GraphQLInt },
    plusMinus: { type: GraphQLInt },
    adr: { type: GraphQLFloat },
    kast: { type: GraphQLFloat },
    rating: { type: GraphQLFloat },
  }),
});

//----Root Query----
const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    news: {
      type: new GraphQLList(NewsType),
      resolve(parent, args) {
        return axios.get("http://localhost:5000/").then((res) => res.data);
      },
    },
    results: {
      type: new GraphQLList(ResultsType),
      resolve(parent, args) {
        return axios
          .get("http://localhost:5000/results")
          .then((res) => res.data);
      },
    },
    matches: {
      type: new GraphQLList(MatchesType),
      resolve(parent, args) {
        return axios
          .get("http://localhost:5000/allmatches")
          .then((res) => res.data);
      },
    },
    match: {
      type: new GraphQLList(SingleMatch),
      args: {
        id: { type: GraphQLInt },
      },
      resolve(parent, args) {
        return axios
          .get("http://localhost:5000/matches/" + args.id)
          .then((res) => res.data);
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});
