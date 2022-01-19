import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TransactionCreateStepTwo from "./TransactionCreateStepTwo";

test("if amount is entered pay button is enabled", async () => {
  render(<TransactionCreateStepTwo sender={{ id: "5" }} receiver={{ id: "5" }} />);

  expect(await screen.findByRole("button", { name: /pay/i })).toBeDisabled();

  userEvent.type(screen.getByPlaceholderText(/amount/i), "50");
  userEvent.type(screen.getByPlaceholderText(/add a note/i), "50");

  expect(await screen.findByRole("button", { name: /pay/i })).toBeEnabled();
});

// Unit
// test("on initial render, pay button is disabled", async () => {
//   render(<TransactionCreateStepTwo sender={{ id: "5" }} receiver={{ id: "5" }} />);

//   expect(await screen.findByRole("button", { name: /pay/i })).toBeDisabled();
// });

// test("if amount is entered pay button is enabled", async () => {
//   render(<TransactionCreateStepTwo sender={{ id: "5" }} receiver={{ id: "5" }} />);

//   userEvent.type(screen.getByPlaceholderText(/amount/i), "50");
//   userEvent.type(screen.getByPlaceholderText(/add a note/i), "50");

//   expect(await screen.findByRole("button", { name: /pay/i })).toBeEnabled();
// });
