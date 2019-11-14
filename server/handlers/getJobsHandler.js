const {
  gitHubJobsApi,
  cleanGitHubJobsApiResponse
} = require("../api/gitHubJobsApi.js");

const retrieveCleanedJobPosts = async userLocation => {
  try {
    const gitHubJobsApiResponseRaw = await gitHubJobsApi(userLocation);
    const gitHubJobsApiResponseCleaned = cleanGitHubJobsApiResponse(
      gitHubJobsApiResponseRaw
    );

    return gitHubJobsApiResponseCleaned;
  } catch (error) {
    throw new Error(error.message);
  }
};

const getJobsHandler = (request, response) => {
  retrieveCleanedJobPosts("London")
    .then(jobPosts => {
      return response.status(200).send(jobPosts);
    })
    .catch(error => {
      throw new Error(error.message);
    });
};

module.exports = getJobsHandler;
