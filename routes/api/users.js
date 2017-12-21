/*
 * Defines all routes needed to access the user information
 */

const router = require("express").Router();
const db = require("../../models")

// Matches with "/api/users" - GET ALL USERS
router.get("/", function(req, res) {
	console.log(`findAll`);
    db.User
      .findAll({})
      .then(results => res.json(results))
      .catch(err => res.status(422).json(err));
});

// Matches with "/api/users" - CREATE A NEW USER if doesn't exist already
router.post("/", function(req, res) {
	console.log(`Create for body: ${JSON.stringify(req.body)}`);
	db.User
	  .findOrCreate({ where: {email: req.body.email}, 
	  				  defaults: {firstName: req.body.firstName, lastName: req.body.lastName} })
	  .spread((user, created) => {
    		console.log(user.get({plain: true}));
		    console.log(created);
		    res.json(user);
	  })
	  .catch(err => res.status(422).json(err));
});

// Matches with /api/users/id - UPDATE
router.put("/:id", function(req, res) {
	console.log(`Update for id: ${req.params.id} body: ${req.body}`);
	db.User
	  .update(req.body, { where: {id: req.params.id}})
	  .then(results => res.join(results))
	  .catch(err => res.status(422).json(err));
});

module.exports = router;
