import React from "react";
import ReactDOM from "react-dom";
import Weather from "../weather";
import { render, screen } from "@testing-library/react";

test("Should render weather component", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Weather></Weather>, div);
});
