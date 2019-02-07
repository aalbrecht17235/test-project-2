var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.render("index", {
        msg: "Welcome!",
        examples: dbExamples
      });
    });
  });

  // Load example page and pass in an example by id
  app.get("/example/:id", function(req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
      res.render("example", {
        example: dbExample
      });
    });
  });

  app.get("/user/:id", function(req, res) {
    db.User.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
      res.render("example", {
        id: dbExample.id,
        firstName: dbExample.firstName
      });
      console.log(dbExample.username);
    });
  });

  app.get("/example/today/:id", function(req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
      res.render("today", {
        highlight: dbExample.highlight,
        positive: dbExample.positive,
        negative: dbExample.negative,
        option1: dbExample.option1,
        option2: dbExample.option2,
        option3: dbExample.option3,
        music: dbExample.music,
        video: dbExample.video,

      });
      console.log(dbExample.username);
    });
  });



  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
