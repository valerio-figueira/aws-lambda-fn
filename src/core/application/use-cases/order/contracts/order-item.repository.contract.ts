import { OrderItemType } from "../types/order-item.type";

export interface OrderItemRepositoryContract {
  createMany(items: OrderItemType[]): Promise<{ count: number }>;
}
