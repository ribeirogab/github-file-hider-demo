  apiUrl: env("API_URL"),
  currency: env("CURRENCY", "USD"),
  payments: {
    maxRetries: Number(env("PAYMENT_MAX_RETRIES", "3")),
    baseDelayMs: Number(env("PAYMENT_BASE_DELAY_MS", "250")),
    timeoutMs: 10_000,
  },
} as const;
