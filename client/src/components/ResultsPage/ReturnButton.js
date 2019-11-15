import React from "react";

const ReturnButton = ({ handleClick }) => {
  return (
    <>
      <form>
        <input
          type="button"
          value="Run a new search!"
          onClick={handleClick}
          data-testid="return-button"
        ></input>
      </form>
    </>
  );
};

export default ReturnButton;
