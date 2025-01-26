import { Order } from "../../../../domain/order/order.entity";
import { OrderType } from "../types/order.type";

export class OrderMapper {
  static toOrderType(order: Order): OrderType {
    return {
      userId: order.getUserId(),
      status: order.getStatus(),
      totalAmount: order.getTotalAmount(),
    };
  }
}
