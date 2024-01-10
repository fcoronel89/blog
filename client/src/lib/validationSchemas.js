import { z } from "zod";
import { categories } from "../utils/helpers";

export const loginSchema = z.object({
  userName: z.string().min(1, "userName is required"),
  password: z.string().min(1, "password is required"),
});

export const signUpSchema = z.object({
  userName: z.string().min(1, "userName is required"),
  password: z
    .string()
    .min(1, "password is required")
    .regex(
      /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/,
      "Password must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
    ),
  email: z.string().min(1, "email is required").email("email is invalid"),
});

const idArray = categories.map(province => province.id);

export const postSchema = z.object({
  title: z.string().min(1, "title is required"),
  desc: z.string().min(1, "description is required").refine((value) => value.trim().length > 0, {
    message: "Please enter a valid description.",
  }),
  cat: z
    .enum(idArray, "category is required")
    .refine((value) => !!value, {
      message: "Please select a valid option.",
    }),
  image: z.object({
    file: z.unknown().refine((value) => value instanceof File || value === undefined, {
      message: "Please select an image file.",
    }),
  }),
});
