import { z } from "zod";

const scheduleUsers = z.object({
  date: z.string(),
  hour: z.string(),
  realEstateId: z.number(),
});

const scheduleUsersComplet = scheduleUsers.omit({
  realEstateId: true,
});

const returnSchedule = scheduleUsers.extend({
  id: z.number(),
});

export { returnSchedule, scheduleUsers, scheduleUsersComplet };

// z.preprocess((date) => {
//   if (typeof date === "string" || date instanceof Date) {
//     return new Date(date);
//   }
// }, z.date().or(z.string())),
