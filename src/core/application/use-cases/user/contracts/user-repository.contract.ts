import { UserType } from "../types/user.type";

export interface UserRepositoryContract {
  findOne(id: string): Promise<UserType | null>;
}
