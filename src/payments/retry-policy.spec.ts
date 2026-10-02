import { describe, expect, it, vi } from "vitest";
import { withRetries } from "./retry-policy";

describe("withRetries", () => {
  it("stops after the maximum number of attempts", async () => {
    const task = vi.fn().mockRejectedValue({ code: "GATEWAY_TIMEOUT" });
    const policy = { maxRetries: 2, baseDelayMs: 0 };

    await expect(withRetries(task, policy, () => true)).rejects.toThrow();

    expect(task).toHaveBeenCalledTimes(3);
  });
});
