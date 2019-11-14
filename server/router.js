const express = require("express");
const router = express();
const getJobsHandler = require("./handlers/getJobsHandler.js");
const corsByPass = require("./middleware/corsByPass.js");

router.use(corsByPass);

router.get("/jobs", getJobsHandler);

module.exports = router;
