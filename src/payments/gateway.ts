  return gateway.charge({ orderId: order.id, amount: order.total });
}

const RETRYABLE_CODES = new Set(["GATEWAY_TIMEOUT", "RATE_LIMITED"]);

export function isRetryable(error: { code: string }) {
  return RETRYABLE_CODES.has(error.code);
}

export function toCents(amount: number) {
