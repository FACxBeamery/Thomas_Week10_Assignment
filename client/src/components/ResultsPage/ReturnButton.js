import React from "react";
import styles from "./ReturnButton.module.css";

const ReturnButton = ({ handleClick }) => {
  return (
    <>
      <form>
        <input
          type="button"
          className={styles["return-button"]}
          value="Run a new search!"
          onClick={handleClick}
          data-testid="return-button"
        ></input>
      </form>
    </>
  );
};

export default ReturnButton;
