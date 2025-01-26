export class OrderItem {
  constructor(
    private readonly id: string | null = null,
    private readonly orderId: string,
    private readonly quantity: number,
    private readonly price: number,
  ) {}

  public getId() {
    return this.id;
  }

  public getOrderId() {
    return this.orderId;
  }

  public getQuantity() {
    return this.quantity;
  }

  public getPrice() {
    return this.price;
  }

  public getTotal(): number {
    return this.quantity * this.price;
  }
}
