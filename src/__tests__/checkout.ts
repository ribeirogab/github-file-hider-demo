  it("charges the order total", async () => {
    const gateway = createFakeGateway();
    const result = await checkout(order, gateway);

    expect(result.status).toBe("paid");
    expect(gateway.charges).toHaveLength(1);
