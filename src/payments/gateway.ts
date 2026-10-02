  return gateway.charge({ orderId: order.id, amount: order.total });
}

export function toCents(amount: number) {
