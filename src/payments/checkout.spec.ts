    expect(result.status).toBe("paid");
  });

  it("does not retry a declined card", async () => {
