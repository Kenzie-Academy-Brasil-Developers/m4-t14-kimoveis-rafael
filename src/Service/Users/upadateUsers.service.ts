import { AppDataSource } from "../../data-source";
import { User } from "../../entities";
import { IReturnUser } from "../../Interfaces";
import { Repo } from "../../Interfaces/Users/user.interfaces";
import { ReturnUsersComplete } from "../../Schemas";

const UpdateUsersService = async (
  oldUser: User,
  newUser: User
): Promise<IReturnUser> => {
  const UseRepository: Repo = AppDataSource.getRepository(User);

  const userUpdate: User = UseRepository.create({
    ...oldUser,
    ...newUser,
  });

  await UseRepository.save(userUpdate);

  return ReturnUsersComplete.parse(userUpdate);
};

export default UpdateUsersService;
