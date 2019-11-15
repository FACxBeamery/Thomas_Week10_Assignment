const axios = require("axios");

const gitHubJobsApi = userLocation => {
  return axios({
    method: "GET",
    url: "https://jobs.github.com/positions.json",
    params: {
      location: userLocation
    }
  })
    .then(response => {
      if (response.status !== 200) {
        throw new Error(
          "An error occured when retrieving job posts from the GitHub Jobs API."
        );
      }
      return response;
    })
    .then(response => response.data)
    .catch(error => {
      throw new Error(error.message);
    });
};

const cleanGitHubJobsApiResponse = apiResponse => {
  if (Array.isArray(apiResponse) && apiResponse.length > 0) {
    const cleanedJobPosts = apiResponse.map(element => {
      const cleanedSinglePost = { ...element };
      delete cleanedSinglePost.description;

      return cleanedSinglePost;
    });
    return cleanedJobPosts;
  } else {
    return [];
  }
};

module.exports = { gitHubJobsApi, cleanGitHubJobsApiResponse };
