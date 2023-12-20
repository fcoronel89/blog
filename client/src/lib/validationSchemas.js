import { z } from "zod";

export const loginSchema = z.object({
    userName: z.string().min(1, "userName is required"),
    password: z.string().min(1, "password is required"),
})


export const signUpSchema = z.object({
    userName: z.string().min(1, "userName is required"),
    password: z.string().min(1, "password is required").regex(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/, "Password must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"),
    email: z.string().min(1, "email is required").email("email is invalid"),
})