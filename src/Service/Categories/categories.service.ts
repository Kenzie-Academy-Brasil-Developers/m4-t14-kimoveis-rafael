import { AppDataSource } from "../../data-source";
import { Category } from "../../entities";
import { ICategories, RepoCategories } from "../../Interfaces";
import { ReturnCategorySchema } from "../../Schemas";

const CreateCategory = async (data: Category): Promise<ICategories> => {
  const UseRepository: RepoCategories = AppDataSource.getRepository(Category);

  const categories: ICategories = UseRepository.create(data);

  await UseRepository.save(categories);

  return ReturnCategorySchema.parse(categories);
};

export default CreateCategory;
