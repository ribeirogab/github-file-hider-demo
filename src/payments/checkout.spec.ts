    expect(result.status).toBe("paid");
  });

  it("retries a timeout and then succeeds", async () => {
    const gateway = createFakeGateway({
      responses: [timeout(), paid()],
    });

    const result = await checkout(order, gateway, { retryPolicy });

    expect(result.status).toBe("paid");
    expect(gateway.charges).toHaveLength(2);
  });

  it("does not retry a declined card", async () => {
