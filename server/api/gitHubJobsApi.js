const axios = require("axios");

const gitHubJobsApi = async () => {
  try {
    const response = await axios({
      method: "GET",
      url: "https://jobs.github.com/positions.json",
      params: {
        location: "london"
      }
    });

    console.log("response after async await: ", response.data);
  } catch (error) {
    console.log(error);
  }
};

gitHubJobsApi();

module.exports = gitHubJobsApi;
