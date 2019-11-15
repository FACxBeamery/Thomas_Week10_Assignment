import React from "react";
// import styles from "./SerchPage.module.css";
import AutoComplete from "./AutoComplete.js";

const SearchPage = ({ setPageState, userInput, setUserInput }) => {
  return (
    <AutoComplete
      userInput={userInput}
      setUserInput={setUserInput}
      setPageState={setPageState}
    />
  );
};

export default SearchPage;
