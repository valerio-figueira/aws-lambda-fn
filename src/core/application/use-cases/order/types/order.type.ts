import { OrderStatusEnum } from "../../../../domain/order/enums/order-status.enum";

export type OrderType = {
  userId: string;
  status: OrderStatusEnum;
  totalAmount: number;
};
