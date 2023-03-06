import { AppDataSource } from "../../data-source";
import { RealEstate } from "../../entities";
import { IRealEstateReturn, RepoEstate } from "../../interfaces";
import { ReturnSchemaEstateGet } from "../../schemas";

const listAllRealEstate = async (): Promise<IRealEstateReturn[]> => {
  const UseRepository: RepoEstate = AppDataSource.getRepository(RealEstate);

  let realEstate = await UseRepository.find({
    relations: {
      address: true,
    },
  });

  const newEstate: IRealEstateReturn[] = realEstate.map((e) => {
    const number = (Math.round(Number(e.value) * 100) / 100).toFixed(2);
    e.value = number;
    return ReturnSchemaEstateGet.parse(e);
  });

  return newEstate;
};

export default listAllRealEstate;
