import { OrderStatusEnum } from "../../../enums/order-status.enum";
import { OrderItemType } from "./order-item.type";

export class OrderCreateParam {
  userId: string;
  status: OrderStatusEnum;
  totalAmount: number;
  items: Omit<OrderItemType, "orderId">[];
}
