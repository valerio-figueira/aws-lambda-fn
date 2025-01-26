import { PrismaClient } from "@prisma/client";
import {
  TransactionContextContract,
  TransactionContract,
} from "../../../core/application/transactions/transactions.contract";

export class PrismaTransaction implements TransactionContract {
  constructor(private readonly prisma: PrismaClient) {}

  async run<T>(
    operation: (tx: TransactionContextContract) => Promise<T>,
  ): Promise<T> {
    return this.prisma.$transaction(async (tx) => {
      const context: TransactionContextContract = {
        order: {
          create: (data) => tx.order.create({ data }),
        },
        orderItem: {
          createMany: (data) => tx.orderItem.createMany({ data }),
        },
      };
      return operation(context);
    });
  }
}
