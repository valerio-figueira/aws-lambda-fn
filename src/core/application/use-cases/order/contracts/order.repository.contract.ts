import { OrderType } from "../types/order.type";

export interface OrderRepositoryContract {
  create(order: OrderType): Promise<{ id: string }>;
}
