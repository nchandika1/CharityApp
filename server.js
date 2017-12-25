const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes");
const db = require("./models");

const app = express();
const PORT = process.env.PORT || 3001; // Port to listen to

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Serve up static assets
app.use(express.static("client/build"));

// Add routes, both API and view
app.use(routes);

// Initialize Database and then kick off the server on 
// successful connection to the database
// "force: true" drops existing tables and starts clean

db.sequelize.sync({force: true}).then(function(){
	console.log("CONNECTED to MySQL dB");

	//==============================
	//Bulk create a few entries at Startup... test purposes only
	db.User.create(
		{
			email: "naga@naga.com", 
			firstName: "Naga", 
			lastName: "Chandika", 
			addrLine1: "175 Bored Ln", 
			city: "Happy", 
			state: "CA", 
			zipCode: "99999"
		});
	//===============================

	// Start the API server
	app.listen(PORT, function(){
		console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
	});
});
