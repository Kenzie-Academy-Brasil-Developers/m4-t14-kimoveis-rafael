import { z } from "zod";
import { LoginUsers } from "../../schemas";

type ILogin = z.infer<typeof LoginUsers>;

export default ILogin;
