import { Router } from "express";
import { createSchedule, listScheduleControllers } from "../../controllers";
import {
  checkAdmMiddleware,
  checkIdUserMiddleware,
  checkToken,
  ensureEntityData,
} from "../../middlewares";
import { scheduleUsers } from "../../schemas";

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
