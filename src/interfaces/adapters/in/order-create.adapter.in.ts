import {
  IsArray,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsString,
} from "class-validator";
import { OrderStatusEnum } from "../../../core/application/enums/order-status.enum";
import { OrderItemCreateAdapterIn } from "./order-item-create.adapter.in";

export class OrderCreateAdapterIn {
  @IsString()
  @IsNotEmpty()
  userId: string;

  @IsEnum(OrderStatusEnum)
  @IsNotEmpty()
  status: OrderStatusEnum;

  @IsNumber()
  @IsNotEmpty()
  totalAmount: number;

  @IsArray({ each: true })
  @IsNotEmpty()
  items: OrderItemCreateAdapterIn[];
}
