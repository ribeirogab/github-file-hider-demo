const ZERO_DECIMAL = new Set(["JPY", "KRW"]);

export function formatMoney(cents: number, currency: string) {
  const amount = ZERO_DECIMAL.has(currency) ? cents : cents / 100;
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
  }).format(amount);
