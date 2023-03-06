import { Router } from "express";
import { createSchedule, listScheduleControllers } from "../../Controllers";
import {
  checkAdmMiddleware,
  checkIdUserMiddleware,
  checkToken,
  ensureEntityData,
} from "../../middlewares";
import { scheduleUsers } from "../../Schemas";

const ScheduleRoute: Router = Router();

ScheduleRoute.post(
  "",
  checkToken,
  ensureEntityData(scheduleUsers),
  checkIdUserMiddleware,
  createSchedule
);

ScheduleRoute.get(
  "/realEstate/:id",
  checkToken,
  checkAdmMiddleware,
  listScheduleControllers
);

export default ScheduleRoute;
