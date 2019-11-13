const getJobsHandler = (request, response) => {
  return response.status(200).send("Successful GET request");
};

module.exports = getJobsHandler;
