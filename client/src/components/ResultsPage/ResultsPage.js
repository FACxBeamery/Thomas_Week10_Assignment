import React from "react";
import axios from "axios";
import styles from "./ResultsPage.module.css";
import JobCard from "./JobCard.js";
import ReturnButton from "./ReturnButton.js";
import JobPosts from "./JobPosts.js";

const ResultsPage = ({ setPageState, userInput }) => {
  const [jobPosts, setJobPosts] = React.useState([]);

  React.useEffect(() => {
    const getJobs = async () => {
      try {
        const response = await axios({
          method: "GET",
          url: "http://localhost:3001/jobs",
          params: {
            location: userInput
          }
        });
        console.log("response inside results page: ", response);
        const jobPostsArray = response.data;
        setJobPosts(jobPostsArray);
      } catch (error) {
        console.error(error);
      }
    };

    getJobs();
  }, [userInput]);

  const handleClick = () => {
    setPageState(0);
  };

  const jobsToRender = jobPosts.map(element => {
    return <JobCard key={element.id} jobData={element} />;
  });

  return (
    <>
      {jobPosts.length === 0 ? null : (
        <div className={styles["results-container"]}>
          <ReturnButton handleClick={handleClick} />
          <JobPosts jobsToRender={jobsToRender} />
        </div>
      )}
    </>
  );
};

export default ResultsPage;
