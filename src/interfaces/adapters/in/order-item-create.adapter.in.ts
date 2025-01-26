import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class OrderItemCreateAdapterIn {
  @IsString()
  @IsNotEmpty()
  quantity: number;

  @IsNumber()
  @IsNotEmpty()
  price: number;
}
