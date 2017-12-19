/*
 * Defines all routes needed for searching html content
 */

const request = require("request");
const db = require("../../models");
const cheerio = require("cheerio");
const router = require("express").Router();

const DONATE_url = "https://api.donorschoose.org/common/json_feed.html?APIKey=DONORSCHOOSE";
const VOLUNTEER_url = "https://www.volunteermatch.org/search/?";

// Route: /api/search/donations
router.get("/donations", function(req, res){
	console.log(`Search Donotions: {req.body}`);
	let url = `{DONATE_url}&state={req.body.city}&cityName={req.body.state}&includeNearbyLocations=true`;
	console.log(url);
	request(url, function(err, results, body) {
		console.log(results);
		res.join(results);
	});
});

// Route: /api/search/volunteer
router.get("/volunteer", function(req, res) {
	console.log(`Search Donotions: {req.body}`);
	// Scrape this site.  We don't have an API to get the list of voluntter sites
	let url = `{VOLUNTEER_url}l={req.body.location}`
	request(url, function(error, response, html) {
		console.log(reponse);
		let $ = cheerio.load(html);
		// Add Scrape elements here later
	});
});

module.exports = router;
