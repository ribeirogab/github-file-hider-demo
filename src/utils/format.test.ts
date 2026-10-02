it("formats dollars", () => {
  expect(formatMoney(1999, "USD")).toBe("$19.99");
});

it("formats zero-decimal currencies", () => {
  expect(formatMoney(1999, "JPY")).toBe("¥1,999");
});
