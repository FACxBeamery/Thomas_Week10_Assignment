import React from "react";
// import styles from "./SerchPage.module.css";

const SearchPage = ({ setPageState, setUserInput }) => {
  const handleClick = () => {
    setPageState(1);
  };

  const handleInput = event => {
    if (/[^A-zÀ-ú-]/gi.test(event.currentTarget.value)) {
      event.currentTarget.value = event.currentTarget.value.replace(
        /[^a-zA-Z\s]/,
        ""
      );
    }
    setUserInput(event.currentTarget.value);
  };
  return (
    <>
      <form>
        <p>In which city shall I find jobs for you?</p>
        <input
          type="text"
          placeholder="Enter city name"
          onInput={handleInput}
          // add an onkey and check if it's an enter key, if yes, run handleClick
        ></input>
        <input
          type="button"
          value="Bring me jobs!"
          onClick={handleClick}
        ></input>
      </form>
    </>
  );
};

export default SearchPage;
