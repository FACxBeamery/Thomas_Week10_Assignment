const express = require("express");
const app = express();
const axios = require("axios");
const moxios = require("moxios");
const supertest = require("supertest");
const router = require("../router.js");
const getJobsHandlerDummyResponse = require("./getJobsHandlerDummyResponse.js");
const gitHubJobsApiDummyResponse = require("../api/gitHubJobsApiDummyResponse.js");

describe("GET /jobs", () => {
  beforeEach(() => {
    jest.resetModules();
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  //   app.use(router);

  test("/jobs should return a 200 status code.", async () => {
    moxios.stubRequest(
      "https://jobs.github.com/positions.json?location=london",
      {
        status: 200,
        response: gitHubJobsApiDummyResponse
      }
    );

    const res = await supertest(app)
      .get("/jobs")
      .query({ location: "London" });

    // expect(res.status).toEqual(200);
    //   expect(res.body).toEqual()
    console.log("res body is:", res.body);

    // expect(moxios.requests.mostRecent().url).toBe(
    //   "https://jobs.github.com/positions.json?location=london"
    // );

    //   .end((error, response) => {
    //     if (error) {
    //       done(error);
    //     } else {
    //       expect(response.status).toBe(200);
    //       expect(response.text).toStrictEqual(getJobsHandlerDummyResponse);
    //       done();
    //     }
    //   });
  });
});
