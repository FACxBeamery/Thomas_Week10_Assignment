import React from "react";
import SearchPage from "./SearchPage.js";
import ResultsPage from "./ResultsPage.js";

const App = () => {
  const [pageState, setPageState] = React.useState(0);
  const [userInput, setUserInput] = React.useState("");

  //   React.useEffect(() => {
  //     const getJobs = async () => {
  //       try {
  //         const response = await axios.get("http://localhost:3001/jobs");
  //         // console.log("response inside function: ", response);
  //         const jobPostsArray = response.data;
  //         setJobPosts(jobPostsArray);
  //       } catch (error) {
  //         console.error(error);
  //       }
  //     };

  //     getJobs();
  //   }, []);

  return (
    <main>
      {(pageState === 0 && (
        <SearchPage setPageState={setPageState} setUserInput={setUserInput} />
      )) ||
        (pageState === 1 && (
          <ResultsPage setPageState={setPageState} userInput={userInput} />
        ))}
    </main>
  );
};

export default App;
