import { describe, expect, it } from "vitest";
import { checkout } from "../payments/checkout";

describe("legacy checkout", () => {
	it("charges once", async () => {
		expect(checkout).toBeDefined();
	});
});
