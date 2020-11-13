const Router = require("express").Router();
const { SeriesDoc } = require("../schemas/AnimeSchema");

Router.get("/autocomplete", (req, res, next) => {
  const { s } = req.query;
  SeriesDoc.aggregate([
    {
      $search: {
        search: {
          query: s,
          path: "name",
        },
      },
    },
    {
      $project: {
        name: 1,
      },
    },
    {
      $limit: 10,
    },
  ])
    .then((animes) => res.send(animes))
    .catch(next);
});

Router.get("/", (req, res, next) => {
  const { s } = req.query;
  SeriesDoc.aggregate([
    {
      $search: {
        search: {
          query: s,
          path: "name",
        },
      },
    },
    {
      $project: {
        name: 1,
        driveLink: 1,
        img: 1,
        shortenedLink: 1,
      },
    },
    {
      $limit: 10,
    },
  ])
    .then((animes) => res.send(animes))
    .catch(next);
});

module.exports = Router;
