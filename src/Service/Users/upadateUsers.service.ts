import { AppDataSource } from "../../data-source";
import { User } from "../../entities";
import { AppError } from "../../err";
import { IReturnUser, Repo } from "../../interfaces";
import { ReturnUsersComplete } from "../../schemas";

const updateUsersService = async (
  oldUser: User,
  newUser: User,
  id: number,
  idUser: number,
  adm: boolean
): Promise<IReturnUser> => {
  7;
  if (id !== idUser && !adm) {
    throw new AppError("Insufficient permission", 403);
  }

  const UseRepository: Repo = AppDataSource.getRepository(User);

  const userUpdate: User = UseRepository.create({
    ...oldUser,
    ...newUser,
  });

  await UseRepository.save(userUpdate);

  return ReturnUsersComplete.parse(userUpdate);
};

export default updateUsersService;
