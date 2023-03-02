import { AppDataSource } from "../../data-source";
import { User } from "../../entities";
import { Repo } from "../../Interfaces";

const DeleteUSerService = async (user: User): Promise<void> => {
  const UseRepository: Repo = AppDataSource.getRepository(User);

  await UseRepository.softRemove(user!);
};

export default DeleteUSerService;
