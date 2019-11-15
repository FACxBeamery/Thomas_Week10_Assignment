const express = require("express");
const app = express();
const nock = require("nock");
const supertest = require("supertest");
const router = require("../router.js");
const getJobsHandlerDummyResponse = require("./getJobsHandlerDummyResponse.js");
const gitHubJobsApiDummyResponse = require("../api/gitHubJobsApiDummyResponse.js");

describe("GET /jobs", () => {
  app.use(router);

  test("/jobs should return a 200 status code ", done => {
    nock("https://jobs.github.com")
      .get("/positions.json?location=london")
      .reply(200, gitHubJobsApiDummyResponse);

    supertest(app)
      .get("/jobs")
      .query({ location: "London" })
      .expect("content-Type", /json/)
      .end((error, response) => {
        if (error) {
          done(error);
        } else {
          expect(response.status).toBe(200);
          expect(response.text).toStrictEqual(getJobsHandlerDummyResponse);
          done();
        }
      });
  });
});
