import React from "react";
import styles from "./AutoComplete.module.css";
import optionsArr from "./AutoCompleteOptions.js";

const AutoComplete = ({ userInput, setUserInput, setPageState }) => {
  const [activeOption, setActiveOption] = React.useState(0);
  const [filteredOptions, setFilteredOptions] = React.useState([]);
  const [showOptions, setShowOptions] = React.useState(false);

  const handleButtonClick = () => {
    setPageState(1);
  };

  React.useEffect(() => {}, [userInput]);

  const handleTextChange = event => {
    if (
      /[^A-zÀ-ú-^\s]/i.test(event.currentTarget.value) ||
      /[\^]/i.test(event.currentTarget.value)
    ) {
      return;
    } else {
      setUserInput(event.currentTarget.value);
    }

    const filteredOptions = optionsArr.filter(option => {
      const regex = new RegExp(
        `^${String(event.currentTarget.value).toLowerCase()}`
      );
      return regex.test(option.toLowerCase());
    });

    setFilteredOptions(filteredOptions);
    setShowOptions(true);
  };

  const handleTextKeyDown = event => {
    if (event.keyCode === 13) {
      event.preventDefault();
      setShowOptions(false);
      setActiveOption(0);
      setUserInput(filteredOptions[activeOption]);
    } else if (event.keyCode === 38) {
      if (activeOption === 0) {
        return;
      }
      setActiveOption(activeOption - 1);
    } else if (event.keyCode === 40) {
      if (activeOption - 1 === filteredOptions.length) {
        return;
      }
      setActiveOption(activeOption + 1);
    }
  };

  const handleTextClick = event => {
    setUserInput(event.currentTarget.innerText);
    setShowOptions(false);
    setFilteredOptions([]);
    setActiveOption(0);
  };

  let optionsList;
  if (showOptions && userInput) {
    if (filteredOptions.length) {
      optionsList = (
        <ul className={styles["options"]}>
          {filteredOptions.map((element, index) => {
            let className;
            if (index === activeOption) {
              className = "option-active";
            }
            return (
              <li
                className={styles[className]}
                key={element}
                onClick={handleTextClick}
              >
                {element}
              </li>
            );
          })}
        </ul>
      );
    } else {
      optionsList = (
        <div className={styles["no-options"]}>
          <em>No autocomplete options!</em>
        </div>
      );
    }
  }

  return (
    <div className={styles["search-container"]}>
      <form>
        <p className={styles["search-instruction"]}>
          In which city shall I find jobs for you?
        </p>
        <input
          type="text"
          className={styles["search-box"]}
          placeholder="Enter city name"
          onKeyDown={handleTextKeyDown}
          onChange={handleTextChange}
          value={userInput}
        ></input>
        <input
          type="button"
          value="Bring me the jobs!"
          className={styles["search-button"]}
          onClick={handleButtonClick}
          data-testid="search-button"
        ></input>
      </form>
      {optionsList}
    </div>
  );
};

export default AutoComplete;
