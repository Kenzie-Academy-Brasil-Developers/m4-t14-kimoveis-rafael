import { Request, Response } from "express";
import { Schedule } from "../../entities";
import { RepoSche } from "../../Interfaces";
import { listSchedule, scheduleCreate } from "../../Service";

const createSchedule = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const newSchedule: string = await scheduleCreate(req.body, req.user);

  return res.status(201).json({ message: newSchedule });
};

const listScheduleControllers = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const schedule = await listSchedule(Number(req.params.id));

  return res.status(200).json(schedule);
};

export { createSchedule, listScheduleControllers };

/*"Invalid hour, available times are 8AM to 18PM"
Invalid date, work days are monday to friday
http 400
"RealEstate not found", 404
"Schedule to this real estate at this date and time already exists",
      409
"User schedule to this real estate at this date and time already exists",
      409
"Schedule created" */
