  const charges: ChargeRequest[] = [];

  return {
    charges,
    async charge(request: ChargeRequest) {
      charges.push(request);
      return { status: "paid", gatewayReference: "fake_ref" };
    },
  };
