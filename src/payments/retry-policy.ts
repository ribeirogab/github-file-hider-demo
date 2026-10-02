import { config } from "../config";

export type RetryPolicy = {
  maxRetries: number;
  baseDelayMs: number;
};

export const defaultRetryPolicy: RetryPolicy = config.payments;

export async function withRetries<T>(
  task: () => Promise<T>,
  policy: RetryPolicy,
  isRetryable: (error: unknown) => boolean,
): Promise<T> {
  for (let attempt = 0; ; attempt++) {
    try {
      return await task();
    } catch (error) {
      if (attempt >= policy.maxRetries || !isRetryable(error)) throw error;
      await sleep(policy.baseDelayMs * 2 ** attempt);
    }
  }
}
