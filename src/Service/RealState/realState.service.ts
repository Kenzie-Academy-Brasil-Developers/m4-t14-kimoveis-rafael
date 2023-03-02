import { AppDataSource } from "../../data-source";
import { RealEstate } from "../../entities";
import { RepoEstate } from "../../Interfaces";

const CreateStateService = async (data: RealEstate) => {
  const UseRepository: RepoEstate = AppDataSource.getRepository(RealEstate);

  const newRealEstate = UseRepository.create(data);
};
