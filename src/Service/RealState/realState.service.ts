import { AppDataSource } from "../../data-source";
import { Address, Category, RealEstate } from "../../entities";
import { AppError } from "../../err";
import { IEState, RepoAdd, RepoEstate } from "../../Interfaces";
import { RealEstateReformSchema, AddressSchema } from "../../Schemas";

const CreateStateService = async (
  data: IEState,
  checkCategory: Category
): Promise<RealEstate> => {
  const repoEstate: RepoEstate = AppDataSource.getRepository(RealEstate);
  const addressRepo: RepoAdd = AppDataSource.getRepository(Address);

  const realEstate = RealEstateReformSchema.parse(data);
  const address = AddressSchema.parse(data.address);

  const checkAddress: Address | null = await addressRepo.findOneBy({
    ...address,
    number: address.number ? address.number : "",
  });

  if (checkAddress) {
    throw new AppError("Address already exists", 409);
  }

  const newRealEstate: RealEstate = repoEstate.create(realEstate as RealEstate);
  await repoEstate.save(newRealEstate);

  const newAddress: Address = addressRepo.create(address);
  await addressRepo.save(newAddress);

  newRealEstate!.address = newAddress;
  newRealEstate.category = checkCategory;

  await repoEstate.save(newRealEstate);

  return newRealEstate;
};

export default CreateStateService;
