import React from "react";
import SearchPage from "./SearchPage/SearchPage.js";
import ResultsPage from "./ResultsPage/ResultsPage.js";

const App = () => {
  const [pageState, setPageState] = React.useState(0);
  const [userInput, setUserInput] = React.useState("");

  return (
    <main>
      {(pageState === 0 && (
        <SearchPage setPageState={setPageState} setUserInput={setUserInput} />
      )) ||
        (pageState === 1 && (
          <ResultsPage
            setPageState={setPageState}
            userInput={userInput}
            setUserInput={setUserInput}
          />
        ))}
    </main>
  );
};

export default App;
