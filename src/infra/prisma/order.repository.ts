import { PrismaClient } from "@prisma/client";
import { OrderRepositoryContract } from "../../core/application/use-cases/order/contracts/order.repository.contract";
import { OrderType } from "../../core/application/use-cases/order/types/order.type";

export class OrderRepository implements OrderRepositoryContract {
  constructor(private readonly prismaClient: PrismaClient) {}

  async create(order: OrderType): Promise<{ id: string }> {
    return this.prismaClient.order.create({
      data: order,
      select: { id: true },
    });
  }
}
