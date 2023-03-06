import { z } from "zod";

const CreatUSers = z.object({
  email: z.string().email().max(45),
  name: z.string().max(45),
  admin: z.boolean().optional(),
  password: z.string(),
});

const UpdateUsers = CreatUSers.partial().omit({ admin: true });

const ReturnUsers = CreatUSers.extend({
  id: z.number(),
}).omit({ password: true });

const ReturnUsersComplete = ReturnUsers.extend({
  createdAt: z.string(),
  updatedAt: z.string(),
  deletedAt: z.string().optional().nullish(),
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
