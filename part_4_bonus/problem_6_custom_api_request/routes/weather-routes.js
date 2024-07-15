const express = require("express");
const { getWeathers } = require("../weathers/weathers.controller");
const router = express.Router();

// Example route: GET /weathers?city=London
router.get("/", getWeathers);

module.exports = router;
