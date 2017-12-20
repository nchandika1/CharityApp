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
router.get("/donations", function(req, res){
	const str = util.inspect(req.params, { showHidden: true, depth: null });

	console.log(`Request: ${str}`);
	console.log(`Search Donotions: ${req.body.city}`);
	// &centerZip=94025
	// let url = `${DONATE_url}&state=${req.body.city}&cityName=${req.body.state}&includeNearbyLocations=true`;
	let url = `${DONATE_url}&state=CA&cityName=Menlo Park&includeNearbyLocations=false`;
	console.log(url);
	request(url, function(err, results, body) {
		res.json(results);
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
