/** @jest-environment jsdom */
import React from "react";
import { render, screen, fireEvent, within } from "@testing-library/react";

import App from "./App";
import ToDo from "./components/ToDo";

test("App: To-Do titles should be displayed", () => {
  render(<App />);

  // expect the Unicorn to show
  expect(screen.getByText("Buy Bananas")).toBeTruthy();
  expect(screen.getByText("Walk Dog")).toBeTruthy();
});

test("ToDo: ToDo titles should be displayed", () => {
  render(<ToDo todo={{ title: "Sweep", complete: true }} />);

  const sweepDiv = screen.getByText("Sweep");
  // expect the Sweep to show
  expect(sweepDiv).toBeTruthy();

  expect(sweepDiv.classList.contains("complete")).toEqual(true);
});

test("Submit handler adds todos to the list", () => {
  render(<App />);
  const input = screen.getByLabelText("title");
  const checkbox = screen.getByLabelText("complete");
  const form = screen.getByLabelText("form");

  const userTyped = "Make Bed";
  fireEvent.change(input, { target: { value: userTyped } });
  fireEvent.submit(form);

  // expect the title to show
  const todosList = document.getElementById("todos");
  expect(within(todosList).getByText(userTyped)).toBeTruthy();
});
