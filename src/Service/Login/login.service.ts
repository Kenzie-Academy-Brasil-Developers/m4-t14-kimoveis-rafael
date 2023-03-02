import { AppDataSource } from "../../data-source";
import { User } from "../../entities";
import { ILogin, Repo } from "../../Interfaces";
import { compare } from "bcryptjs";
import { AppError } from "../../Err/error";
import jwt from "jsonwebtoken";

const LoginService = async (data: ILogin): Promise<string> => {
  const UseRepository: Repo = AppDataSource.getRepository(User);

  const oldUser: User | null = await UseRepository.findOne({
    where: {
      email: data.email,
    },
  });

  if (!oldUser) {
    throw new AppError("Wrong email/password", 401);
  }

  if (oldUser.deletedAt) {
    throw new AppError("Wrong email/password", 401);
  }

  const password: string = data.password;

  const comparePassWord: boolean = await compare(password, oldUser.password!);

  if (!comparePassWord) {
    throw new AppError("Wrong email/password", 401);
  }

  const token: string = jwt.sign(
    {
      admin: oldUser.admin,
    },
    process.env.SECRET_KEY!,
    {
      expiresIn: "24h",
      subject: oldUser.id + "",
    }
  );

  return token;
};

export default LoginService;
