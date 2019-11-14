import React from "react";
import axios from "axios";

const App = () => {
  const [jobPosts, setJobPosts] = React.useState([]);

  React.useEffect(() => {
    const getJobs = async () => {
      try {
        const response = await axios.get(
          "https://cors-anywhere.herokuapp.com/http://localhost:3001/jobs"
        );
        console.log("response inside function: ", response);
        setJobPosts(response);
      } catch (error) {
        console.error(error);
      }
    };

    getJobs();

    // getJobs()
    //   .then(jobPosts => console.log("job posts:", jobPosts))
    //   .catch(error => {
    //     throw new Error(error.message);
    //   });
  }, []);

  return (
    <>
      <p>Returned</p>
    </>
  );
};

export default App;
