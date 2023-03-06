import { Repository } from "typeorm";
import { z } from "zod";
import { Schedule } from "../../entities";
import { returnSchedule, scheduleUsers } from "../../schemas";

type ISchedule = z.infer<typeof returnSchedule>;
type IReturnSchedule = z.infer<typeof scheduleUsers>;
type RepoSche = Repository<Schedule>;

export { ISchedule, IReturnSchedule, RepoSche };
