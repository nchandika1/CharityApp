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

//Matches with /api/users/:id - ID is the id
router.get("/:id", function(req, res) {
	console.log(`findOne: ${req.params.id}`);
    db.User
      .findOne({ where: {id: req.params.id} })
      .then(results => res.json(results))
      .catch(err => res.status(422).json(err));
});

// Matches with "/api/users" - CREATE A NEW USER if doesn't exist already
router.post("/", function(req, res) {
	console.log(`Create for body: ${JSON.stringify(req.body)}`);
	db.User
	  .findOrCreate({ where: {email: req.body.email}, 
	  				  defaults: {firstName: req.body.firstName, lastName: req.body.lastName, image: req.body.image} })
	  .spread((user, created) => {
    		console.log(user.get({plain: true}));
		    console.log(created);
		    db.Annual
          .bulkCreate([
            {year: "2017", total: 100, UserId: user.id},
            {year: "2016", total: 50, UserId: user.id},
            {year: "2015", total: 300, UserId: user.id},
            {year: "2014", total: 1000, UserId: user.id},
            {year: "2013", total: 200, UserId: user.id}
         ]);
		    res.json(user);
	  })
	  .catch(err => res.status(422).json(err));
});

// Matches with /api/users/id - UPDATE
router.put("/:id", function(req, res) {
	console.log(`Update for id: ${req.params.id} body: ${req.body}`);
	db.User
	  .update(req.body, { where: {id: req.params.id}})
	  .then(results => res.join(results));
});

module.exports = router;
