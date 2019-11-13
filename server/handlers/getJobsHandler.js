const {
  gitHubJobsApi,
  cleanGitHubJobsApi
} = require("../api/gitHubJobsApi.js");

const retrieveJobPosts = async userLocation => {
  try {
    const gitHubJobsApiResponseRaw = await gitHubJobsApi(userLocation);
    const gitHubJobsApiResponseCleaned = cleanGitHubJobsApi(
      gitHubJobsApiResponseRaw
    );

    return gitHubJobsApiResponseCleaned;
  } catch (error) {
    throw new Error(error.message);
  }
};

const getJobsHandler = (request, response) => {
  retrieveJobPosts("London")
    .then(jobPosts => {
      return response.status(200).send(jobPosts);
    })
    .catch(error => {
      throw new Error(error.message);
    });
};

module.exports = getJobsHandler;
