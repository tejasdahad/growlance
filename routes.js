const routes = require("express").Router();

const scrape = require('./scraper');

routes.get("/getData", async (req, res) => {
  const result = await scrape("https://www.ndtv.com/india-news/coronavirus-pm-modi-tells-officials-flags-vaccine-complacency-focus-on-2nd-dose-2598115");
  console.log(process.pid)
  res.status(200).json(result);
});

module.exports = routes;