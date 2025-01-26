import { OrderStatusEnum } from "./enums/order-status.enum";

export class Order {
  constructor(
    private readonly id: string | null = null,
    private readonly userId: string,
    private status: OrderStatusEnum,
    private totalAmount: number,
  ) {}

  validate(): boolean {
    return true;
  }

  public getId(): string | null {
    return this.id;
  }

  public getUserId(): string {
    return this.userId;
  }

  public getStatus(): OrderStatusEnum {
    return this.status;
  }

  public getTotalAmount(): number {
    return this.totalAmount;
  }

  public setStatus(status: OrderStatusEnum): OrderStatusEnum {
    return this.status = status;
  }

  public setTotalAmount(totalAmount: number): number {
    // validate before
    return this.totalAmount = totalAmount;
  }
}
