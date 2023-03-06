import { AppDataSource } from "../../data-source";
import { RealEstate, User } from "../../entities";
import { AppError } from "../../err";
import { Repo, RepoEstate } from "../../Interfaces";

const listSchedule = async (id: number): Promise<RealEstate> => {
  const repoEstate: RepoEstate = AppDataSource.getRepository(RealEstate);

  const user: RealEstate | null = await repoEstate
    .createQueryBuilder("realEstate")
    .select(["user", "schedules", "realEstate", "address", "categories"])
    .innerJoin("realEstate.address", "address")
    .innerJoin("realEstate.category", "categories")
    .innerJoin("realEstate.schedules", "schedules")
    .innerJoin("schedules.user", "user")
    .where("realEstate.id = :id", { id: id })
    .getOne();

  if (!user) {
    throw new AppError("RealEstate not found", 404);
  }

  return user;
};

export default listSchedule;
