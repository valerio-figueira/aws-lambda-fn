import { OrderItem } from "../../../domain/order/order-item.entity";
import { Order } from "../../../domain/order/order.entity";
import { TransactionContract } from "../../transactions/transactions.contract";
import { UserRepositoryContract } from "../user/contracts/user-repository.contract";
import { OrderCreateManagerContract } from "./contracts/order-create.manager.contract";
import { OrderItemMapper } from "./mapper/order-item.mapper";
import { OrderMapper } from "./mapper/order.mapper";
import { OrderCreateParam } from "./types/order-create-param";
import { OrderItemType } from "./types/order-item.type";

export class OrderCreateManager implements OrderCreateManagerContract {
  constructor(
    private readonly transaction: TransactionContract,
    private readonly userRepository: UserRepositoryContract,
  ) {}

  async create(body: OrderCreateParam): Promise<{ id: string }> {
    const userExists = this.userRepository.findOne(body.userId);

    if (!userExists) {
      throw new Error("Usuário não encontrado!");
    }

    const { items, status, totalAmount, userId } = body;

    const id = await this.transaction.run(async (tx) => {
      const order = new Order(null, userId, status, totalAmount);
      const orderMapped = OrderMapper.toOrderType(order);

      const { id: orderId } = await tx.order.create(orderMapped);

      const orderItems: OrderItemType[] = [];

      for (const { price, quantity } of items) {
        const item = new OrderItem(null, orderId, price, quantity);
        const itemMapped = OrderItemMapper.toOrderItemType(item);
        orderItems.push(itemMapped);
      }

      await tx.orderItem.createMany(orderItems);

      return orderId;
    });

    return { id };
  }
}
