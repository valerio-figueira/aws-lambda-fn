import { OrderCreateParam } from "../types/order-create-param";

export interface OrderCreateManagerContract {
  create(order: OrderCreateParam): Promise<{ id: string }>;
}
