import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { CheckoutForm } from "./CheckoutForm";

it("disables the submit button while the charge is retried", async () => {
  const onSubmit = vi.fn(() => new Promise(() => {}));
  render(<CheckoutForm onSubmit={onSubmit} />);

  await userEvent.click(screen.getByRole("button", { name: "Pay now" }));

  expect(screen.getByRole("button", { name: "Pay now" })).toBeDisabled();
  expect(onSubmit).toHaveBeenCalledOnce();
});
