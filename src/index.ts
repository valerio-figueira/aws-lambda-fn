import { Handler, SQSEvent } from "aws-lambda";
import { container } from "tsyringe";
import { TransactionContract } from "./core/application/transactions/transactions.contract";
import { UserRepositoryContract } from "./core/application/use-cases/user/contracts/user-repository.contract";
import { PrismaTransaction } from "./infra/prisma/transactions/transactions.prisma";
import { UserRepository } from "./infra/prisma/user.repository";
import { OrderCreateManager } from "./core/application/use-cases/order/order-create.manager";
import { OrderCreateAdapterIn } from "./interfaces/adapters/in/order-create.adapter.in";

container.register<TransactionContract>("TransactionContract", {
  useClass: PrismaTransaction,
});
container.register<UserRepositoryContract>("UserRepositoryContract", {
  useClass: UserRepository,
});

export const handler: Handler = async (event: SQSEvent) => {
  try {
    const [sqsMessage] = event.Records;

    const orderManager = container.resolve(OrderCreateManager);

    const body: OrderCreateAdapterIn = JSON.parse(sqsMessage.body || "{}");

    const order = new OrderCreateAdapterIn(
      body.userId,
      body.status,
      body.totalAmount,
      body.items,
    );

    const { id: orderId } = await orderManager.create(order);

    return {
      statusCode: 201,
      body: JSON.stringify({ orderId, message: "Order created successfully!" }),
    };
  } catch (error) {
    // TO-DO: classes of errors
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: "Internal Server Error",
        details: error,
      }),
    };
  }
};
