import React from "react";
import ReactDOM from "react-dom";
import "@testing-library/jest-dom/extend-expect";
import { render, fireEvent, cleanup, unmount } from "@testing-library/react";
import App from "./App.js";
import ResultsPage from "./ResultsPage/ResultsPage.js";

afterEach(cleanup);

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test("Testing the opening page display an instruction, text box and a button.", () => {
  const { getByText, getByTestId, getByPlaceholderText, unmount } = render(
    <App />
  );

  const instruction = getByText("In which city shall I find jobs for you?");
  const searchButton = getByTestId("search-button");
  const textInput = getByPlaceholderText("Enter city name");

  expect(instruction).toBeVisible();
  expect(searchButton).toBeVisible();
  expect(textInput).toBeVisible();

  //   fireEvent.change(textInput, { target: { value: "London" } });
  //   fireEvent.click(searchButton);

  //   unmount(<App />);

  //   render(
  //     <ResultsPage
  //       setPageState={() => {}}
  //       userInput="London"
  //       setUserInput={() => {}}
  //     />
  //   );
});
