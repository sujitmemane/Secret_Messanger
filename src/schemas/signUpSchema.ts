import { z } from "zod";

export const usernameValidation = z
  .string()
  .min(2, "Username must be atleast 2 characters")
  .max(20, "Username must  be no more than 20  characters")
  .regex(/^[a-zA-Z0-9_]+$/, "Username should only  contain alphanumeric value");

export const signUpSchema = z.object({
  username: usernameValidation,
  email: z.string().email({
    message: "Invalid email address",
  }),
  passsword: z
    .string()
    .min(5, { message: "Password must be at least  5 characters" }),
});
