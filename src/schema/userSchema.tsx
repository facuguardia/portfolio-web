import { z } from "zod";

export const userSchema = z.object({
  user_name: z
    .string()
    .min(4, { message: "El nombre tiene un mínimo de 4 caracteres" })
    .max(20, { message: "El nombre tiene un máximo de 20 caracteres" }),
  user_email: z.string().email({ message: "El email no es válido" }),
  message: z
    .string()
});
