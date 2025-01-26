import { OrderItem } from "../../../../domain/order/order-item.entity";
import { OrderItemType } from "../types/order-item.type";

export class OrderItemMapper {
  static toOrderItemType(item: OrderItem): OrderItemType {
    return {
      orderId: item.getOrderId(),
      price: item.getPrice(),
      quantity: item.getQuantity(),
    };
  }
}
