  it("renders the label", () => {
    render(<Button>Pay now</Button>);
    expect(screen.getByRole("button")).toHaveTextContent("Pay now");
  });
});
