const express = require("express");
const router = express();
const getJobsHandler = require("./handlers/getJobsHandler.js");

router.get("/", getJobsHandler);

module.exports = router;
