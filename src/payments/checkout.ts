import { config } from "../config";
import { charge } from "./gateway";

export async function checkout(
  order: Order,
  gateway: Gateway,
) {
  return charge(gateway, order);
}
