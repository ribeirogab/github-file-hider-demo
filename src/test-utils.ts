  const charges: ChargeRequest[] = [];
  const responses = [...(options.responses ?? [])];

  return {
    charges,
    async charge(request: ChargeRequest) {
      charges.push(request);
      const next = responses.shift() ?? paid();
      if (next instanceof Error) throw next;
      return next;
    },
  };
