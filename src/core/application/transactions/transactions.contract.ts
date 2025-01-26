import { OrderItemType } from "../use-cases/order/types/order-item.type";
import { OrderType } from "../use-cases/order/types/order.type";

export interface TransactionContract {
  run<T>(operation: (tx: TransactionContextContract) => Promise<T>): Promise<T>;
}

export interface TransactionContextContract {
  order: {
    create(data: OrderType): Promise<{ id: string }>;
    // Outros métodos necessários
  };
  orderItem: {
    createMany(data: OrderItemType[]): Promise<{ count: number }>;
    // Outros métodos necessários
  };
}
