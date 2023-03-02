import { AppDataSource } from "../../data-source";
import { Category } from "../../entities";
import { RepoCategories } from "../../Interfaces";

const ListAllCategory = async (): Promise<Category[]> => {
  const UseRepository: RepoCategories = AppDataSource.getRepository(Category);

  const categories: Category[] = await UseRepository.find();

  return categories;
};

export default ListAllCategory;
