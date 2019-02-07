var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/examples", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.json(dbExamples);
    });
  });

  // Create a new example
  app.post("/api/examples", function(req, res) {
    db.Example.create(req.body).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  app.get("/api/users", function(req, res) {
    db.User.findAll({}).then(function(dbExamples) {
      res.json(dbExamples);
    });
  });

  app.post("/api/users", function(req, res) {
    db.User.create(req.body).then(function(results) {
      res.json(results);
    });
  });

  app.get("/api/example/today", function(req, res) {
    db.Example.findOne({where: {uniqueNum: 3333}}).then(function(dbExamples) {
      res.json(dbExamples);
    });
  });

  app.post("/api/example/today", function(req, res) {
    db.Example.create(req.body).then(function(results) {
      res.json(results);
    });
  });

  

  // app.get("/user/today/:id", function(req, res) {
  //   db.Example.findOne({where: { id: req.params.id }}).then(function(dbExamples) {
  //     res.json(dbExamples);
  //   });
  // });

  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
      res.json(dbExample);
    });
  });
};
