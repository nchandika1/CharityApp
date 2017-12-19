/*
 * Defines all routes needed to access the donation information
 */

const router = require("express").Router();
const db = require("../../models")

// Matches with "/api/donation" - GET ALL Donations
router.get("/", function(req, res) {
	console.log(`findAll`);
    db.Donation
      .findAll({})
      .then(results => res.json(results))
      .catch(err => res.status(422).json(err));
});

// Matches with "/api/donation/id" - GET ALL Donations for a given user
router.get("/:id", function(req, res) {
	console.log(`findAll for user {req.params.id}`);
    db.Donation
      .findAll({ where: {id: req.params.id} })
      .then(results => res.json(results))
      .catch(err => res.status(422).json(err));
});

// Matches with "/api/donation" - CREATE A NEW DONATION
router.post("/", function(req, res) {
	console.log(`Create for body: {req.body}`);
	db.Donation
	  .create(req.body)
	  .then(results => res.join(results))
	  .catch(err => res.status(422).json(err));
});

// Matches with /api/donation/id - UPDATE
router.put("/:id", function(req, res) {
	console.log(`Update for id: {req.params.id} body: {req.body}`);
	db.Donation
	  .update(req.body, { where: {id: req.params.id}})
	  .then(results => res.join(results))
	  .catch(err => res.status(422).json(err));
});

// Matches with /api/donation/id - Delete
router.delete("/:id", function(req, res) {
	console.log(`Update for id: {req.params.id} body: {req.body}`);
	db.Donation
	  .destroy({ where: {id: req.params.id} })
	  .then(results => res.join(results))
	  .catch(err => res.status(422).json(err));
});


module.exports = router;
