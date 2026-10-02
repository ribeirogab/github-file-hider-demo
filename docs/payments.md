The checkout flow charges the customer when the order is confirmed.

Failed charges are retried with exponential backoff before the
customer sees an error.

## Retry policy

| Attempt | Delay |
| ------- | ----- |
| 1       | 250ms |
| 2       | 1s    |

See `src/payments/retry-policy.ts` for the implementation.
