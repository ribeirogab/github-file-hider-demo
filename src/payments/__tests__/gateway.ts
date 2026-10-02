import { describe, expect, it } from "vitest";
import { isRetryable } from "../gateway";

describe("isRetryable", () => {
  it.each([
    ["GATEWAY_TIMEOUT", true],
    ["RATE_LIMITED", true],
    ["CARD_DECLINED", false],
  ])("%s → %s", (code, expected) => {
    expect(isRetryable({ code })).toBe(expected);
  });
});
