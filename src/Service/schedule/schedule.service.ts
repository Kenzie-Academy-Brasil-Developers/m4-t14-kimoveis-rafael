import { AppDataSource } from "../../data-source";
import { RealEstate, Schedule, User } from "../../entities";
import { AppError } from "../../err";
import { ISchedule, Repo, RepoEstate, RepoSche } from "../../Interfaces";
import { scheduleUsersComplet } from "../../Schemas";

const scheduleCreate = async (data: ISchedule, user: User): Promise<string> => {
  const repoSche: RepoSche = AppDataSource.getRepository(Schedule);
  const repoEstate: RepoEstate = AppDataSource.getRepository(RealEstate);

  const date1 = new Date(data.date);
  const hour = data.hour.slice(0, 2);

  if (date1.getDay() === 0 || date1.getDay() === 6) {
    throw new AppError("Invalid date, work days are monday to friday", 400);
  }

  if (Number(hour) < 8 || Number(hour) > 18) {
    throw new AppError("Invalid hour, available times are 8AM to 18PM", 400);
  }

  const realEstate: RealEstate | null = await repoEstate.findOneBy({
    id: data.realEstateId,
  });

  if (!realEstate) {
    throw new AppError("RealEstate not found", 404);
  }

  const newSchedule = {
    date: data.date,
    hour: data.hour,
    realEstate: realEstate,
    user: user,
  };

  const schedule: Schedule = repoSche.create(newSchedule);

  const verifc: Schedule | null = await repoSche
    .createQueryBuilder("sche")
    .where("sche.userId = :id", { id: schedule.user.id })
    .andWhere("sche.date = :date", { date: schedule.date })
    .andWhere("sche.hour = :hour", {
      hour: schedule.hour,
    })
    .getOne();

  if (verifc) {
    throw new AppError(
      "User schedule to this real estate at this date and time already exists",
      409
    );
  }

  const checkSchedule: Schedule | null = await repoSche
    .createQueryBuilder("sche")
    .where("sche.realEstateId = :id", {
      id: schedule.realEstate.id,
    })
    .andWhere("sche.date = :date", { date: schedule.date })
    .andWhere("sche.hour = :hour", {
      hour: schedule.hour,
    })
    .getOne();

  if (checkSchedule) {
    throw new AppError(
      "Schedule to this real estate at this date and time already exists",
      409
    );
  }

  await repoSche.save(schedule);

  return "Schedule created";
};

export default scheduleCreate;
