/*
 * Defines all routes needed to access the volunteer information
 */

const router = require("express").Router();
const db = require("../../models")

// Matches with "/api/volunteer" - GET ALL Volunteer information
router.get("/", function(req, res) {
	console.log(`findAll`);
    db.Volunteer
      .findAll({})
      .then(results => res.json(results))
      .catch(err => res.status(422).json(err));
});

// Matches with "/api/volunteer/id" - GET ALL volunteer info for a given user
router.get("/:id", function(req, res) {
	console.log(`findAll for user {req.params.id}`);
    db.Volunteer
      .findAll({ where: {id: req.params.id} })
      .then(results => res.json(results))
      .catch(err => res.status(422).json(err));
});

// Matches with "/api/volunteer" - CREATE A NEW Volunteer entry
router.post("/", function(req, res) {
	console.log(`Create for body: {req.body}`);
	db.Volunteer
	  .create(req.body)
	  .then(results => res.join(results))
	  .catch(err => res.status(422).json(err));
});

// Matches with /api/volunteer/id - UPDATE
router.put("/:id", function(req, res) {
	console.log(`Update for id: {req.params.id} body: {req.body}`);
	db.Volunteer
	  .update(req.body, { where: {id: req.params.id}})
	  .then(results => res.join(results))
	  .catch(err => res.status(422).json(err));
});

// Matches with /api/volunteer/id - Delete
router.delete("/:id", function(req, res) {
	console.log(`Update for id: {req.params.id} body: {req.body}`);
	db.Volunteer
	  .destroy({ where: {id: req.params.id} })
	  .then(results => res.join(results))
	  .catch(err => res.status(422).json(err));
});

module.exports = router;

