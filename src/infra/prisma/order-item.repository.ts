import { PrismaClient } from "@prisma/client";
import { OrderItemRepositoryContract } from "../../core/application/use-cases/order/contracts/order-item.repository.contract";
import { OrderItemType } from "../../core/application/use-cases/order/types/order-item.type";

export class OrderItemRepository implements OrderItemRepositoryContract {
  constructor(private readonly prismaClient: PrismaClient) {}

  async createMany(items: OrderItemType[]): Promise<{ count: number }> {
    return this.prismaClient.orderItem.createMany({
      data: items,
    });
  }
}
