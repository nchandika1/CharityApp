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

// Matches with "/api/donation/user/id" - GET ALL Donations for a given user based on UserId
router.get("/user/:id", function(req, res) {
	console.log(`findAll for user: ${req.params.id}`);
    db.Donation
      .findAll({ where: {UserId: req.params.id} })
      .then(results => res.json(results))
});

// Matches with "/api/donation/id" - GET a Donations given an ID
router.get("/:id", function(req, res) {
	console.log(`findAll for user {req.params.id}`);
    db.Donation
      .findAll({ where: {id: req.params.id} })
      .then(results => res.json(results))
      .catch(err => res.status(422).json(err));
});

// Matches with "/api/donation" - CREATE A NEW DONATION
router.post("/", function(req, res) {
	console.log(`Create for donation: ${JSON.stringify(req.body)}`);
	db.Donation
	  .findOrCreate({ where: {orgId: req.body.orgId, UserId: req.body.UserId}, 
	  						    defaults: { UserId: req.body.UserId, 
	  						    					 	orgName: req.body.orgName, 
	  						    					 	url: req.body.url, 
	  						    					 	fundUrl: req.body.fundUrl,
	  						    					 	favorite: true, 
	  						    					 	donatedAmount: 0}
	  						  })
	  .spread((donation, created) => {
    		console.log(donation.get({plain: true}));
		    console.log(created);
		    res.json(donation);
	  })
});

// Matches with /api/donation/user/id - UPDATE
router.put("/:user/:id", function(req, res) {
	console.log(req.body);
	db.Donation
	  .update(req.body, { where: {id: req.params.id, UserId: req.params.user}})
	  .then(results => res.json(results))
});

// Matches with /api/donation/id - Delete
router.delete("/:id", function(req, res) {
	console.log(`Update for id: {req.params.id} body: {req.body}`);
	db.Donation
	  .destroy({ where: {id: req.params.id} })
	  .then(results => res.json(results))
});


module.exports = router;
