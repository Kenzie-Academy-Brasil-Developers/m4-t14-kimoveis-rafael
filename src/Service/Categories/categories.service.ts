import { AppDataSource } from "../../data-source";
import { Category } from "../../entities";
import { ICategories, RepoCategories } from "../../interfaces";
import { ReturnCategorySchema } from "../../schemas";

const createCategory = async (data: Category) => {
  const UseRepository: RepoCategories = AppDataSource.getRepository(Category);

  const categories: ICategories = UseRepository.create(data);

  await UseRepository.save(categories);

  const category = ReturnCategorySchema.parse(categories);

  return category;
};

export default createCategory;
