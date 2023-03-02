import { AppDataSource } from "../../data-source";
import { User } from "../../entities";
import { IReturnUser, Repo } from "../../Interfaces/Users/user.interfaces";
import { ReturnUsersComplete } from "../../Schemas";

const ListAllUsersService = async (): Promise<IReturnUser[]> => {
  const UseRepository: Repo = AppDataSource.getRepository(User);

  const users: User[] = await UseRepository.find();
  const newUser: IReturnUser[] = users.map((e) => ReturnUsersComplete.parse(e));

  return newUser;
};

export default ListAllUsersService;
