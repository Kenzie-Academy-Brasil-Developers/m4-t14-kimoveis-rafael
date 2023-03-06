import { AppDataSource } from "../../data-source";
import { Category } from "../../entities";
import { RepoCategories } from "../../interfaces";

const listCategoryId = async (id: number) => {
  const UseRepository: RepoCategories = AppDataSource.getRepository(Category);

  const itens = await UseRepository.findOne({
    where: {
      id: id,
    },
    relations: {
      realEstate: true,
    },
  });

  return itens;
};

export default listCategoryId;
