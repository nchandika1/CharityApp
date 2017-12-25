/*
 * Defines routes required to access Annual Contributions in Dollars 
 */
const router = require("express").Router();
const db = require("../../models");

// Matches /api/annual - Get al contributions in dollars
router.get("/", function(req, res) {
 	console.log(`findAll`);
  db.Annual
    .findAll({})
    .then(results => res.json(results));
});

// Matches /api/annual/year/year - Get specific contribution by year
router.get("/year/:year", function(req, res) {
	console.log(`findOne: ${req.params.year}`);
  db.Annual
    .findOne({ where: {year: req.params.year} })
    .then(results => res.json(results));
});

// Matches /api/annual/user/user - Get all contributions for a given user
router.get("/user/:user", function(req, res) {
	console.log(`findOne: ${req.params.user}`);
  db.Annual
    .findAll({ where: {UserId: req.params.user} })
    .then(results => res.json(results));
});

// Matches /api/annual/ - Add a new annual contribution entry 
router.post("/", function(req, res) {
	db.Annual
	  .create(req.body)
	  .then(results => res.json(results))
});

// Matches /api/annual/id - Update annual contribution for a given id
router.put("/:id", function(req, res) {
	console.log(`Update for id: ${req.params.id} body: ${req.body}`);
	db.Annual
	  .update(req.body, { where: {id: req.params.id}})
	  .then(results => res.json(results))
});

module.exports = router;