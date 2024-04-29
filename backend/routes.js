const express = require("express");
const router = express.Router();

router.get("/api/data/test", (req, res) => {
  res.json({ message: "Sample data from Express.js backend" });
});

router.get("/api/data/transactions/:address", async (req, res) => {
  // use 3rd party api to fetch data
  const address = req.params.address;
  const API_ENDPOINT = `https://api-goerli.etherscan.io/api?module=account&action=txlist&address=${address}&startblock=0&endblock=99999999&page=1&offset=10&sort=asc&apikey=539BR6VBD82DVVP85KHDAHF9M5DB7NSNJI`;
  const response = await fetch(API_ENDPOINT);
  const { result } = await response.json();
  res.json({ transactions: result });
});

module.exports = router;
