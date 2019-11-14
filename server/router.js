const express = require("express");
const router = express();
const getJobsHandler = require("./handlers/getJobsHandler.js");

router.get("/jobs", getJobsHandler);

module.exports = router;
