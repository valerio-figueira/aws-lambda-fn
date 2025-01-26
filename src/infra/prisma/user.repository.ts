import { PrismaClient } from "@prisma/client";
import { UserRepositoryContract } from "../../core/application/use-cases/user/contracts/user-repository.contract";
import { UserType } from "../../core/application/use-cases/user/types/user.type";

export class UserRepository implements UserRepositoryContract {
  constructor(private readonly prismaClient: PrismaClient) {}

  async findOne(id: string): Promise<UserType | null> {
    return this.prismaClient.user.findUnique({ where: { id } });
  }
}
