import { z } from "zod";
import { LoginUsers } from "../../Schemas";

type ILogin = z.infer<typeof LoginUsers>;

export default ILogin;
