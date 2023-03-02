import { hashSync } from "bcryptjs";
import { z } from "zod";

const CreatUSers = z.object({
  email: z.string().email().max(45),
  name: z.string().max(45),
  admin: z.boolean().optional(),
  password: z.string().transform((pass) => hashSync(pass)),
});

const UpdateUsers = CreatUSers.partial();

const ReturnUsers = CreatUSers.extend({
  id: z.number(),
}).omit({ password: true });

const ReturnUsersComplete = ReturnUsers.extend({
  createdAt: z.date(),
  updatedAt: z.date(),
  deletedAt: z.date().optional().nullish(),
});

const LoginUsers = z.object({
  password: z.string(),
  email: z.string().email(),
});

export {
  CreatUSers,
  ReturnUsers,
  ReturnUsersComplete,
  UpdateUsers,
  LoginUsers,
};
