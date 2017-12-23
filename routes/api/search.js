/*
 * Defines all routes needed for searching html content
 */

const request = require("request");
const db = require("../../models");
const cheerio = require("cheerio");
const router = require("express").Router();
const util = require('util')

const DONATE_url = "https://api.donorschoose.org/common/json_feed.html?APIKey=DONORSCHOOSE";
const VOLUNTEER_url = "https://www.volunteermatch.org/search/?";

// Route: /api/search/donations
router.post("/donations", function(req, res){
	console.log(req.body.zip);
	// let url = `${DONATE_url}&state=CA&cityName=Menlo Park&includeNearbyLocations=false`;
	let url = `${DONATE_url}&zip=${req.body.zip}&includeNearbyLocations=false`;

	console.log(url);
	request(url, function(err, results, body) {
		res.json(results);
	});
});

// Route: /api/search/volunteer
router.post("/volunteer", function(req, res) {
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
