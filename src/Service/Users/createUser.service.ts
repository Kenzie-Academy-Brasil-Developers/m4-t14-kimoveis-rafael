import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities";
import { IReturnUser } from "../../Interfaces";
import { ReturnUsersComplete } from "../../Schemas";

const CreateUsersServices = async (data: User): Promise<IReturnUser> => {
  const UseRepository: Repository<User> = AppDataSource.getRepository(User);

  const user = UseRepository.create(data);

  await UseRepository.save(user);

  const newUser: IReturnUser = ReturnUsersComplete.parse(user);

  return newUser;
};

export default CreateUsersServices;
