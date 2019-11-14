import React from "react";
import axios from "axios";

const App = () => {
  const [jobPosts, setJobPosts] = React.useState([]);

  React.useEffect(() => {
    const getJobs = async () => {
      try {
        const response = await axios.get("http://localhost:3001/jobs");
        // console.log("response inside function: ", response);
        const jobPostsArray = response.data;
        setJobPosts(jobPostsArray);
      } catch (error) {
        console.error(error);
      }
    };

    getJobs();
  }, []);

  return (
    <>
      <p>Returned</p>
    </>
  );
};

export default App;
