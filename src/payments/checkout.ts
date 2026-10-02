import { config } from "../config";
import { charge, isRetryable } from "./gateway";
import { type RetryPolicy, defaultRetryPolicy, withRetries } from "./retry-policy";

export async function checkout(
  order: Order,
  gateway: Gateway,
  { retryPolicy = defaultRetryPolicy }: { retryPolicy?: RetryPolicy } = {},
) {
  return withRetries(() => charge(gateway, order), retryPolicy, isRetryable);
}
