  it("renders the label", () => {
    render(<Button>Pay now</Button>);
    expect(screen.getByRole("button")).toHaveTextContent("Pay now");
  });

  it("shows a spinner while loading", () => {
    render(<Button loading>Pay now</Button>);
    const button = screen.getByRole("button");
    expect(button).toBeDisabled();
    expect(button).toHaveAttribute("aria-busy", "true");
  });
});
