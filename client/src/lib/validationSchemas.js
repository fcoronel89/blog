import { z } from "zod";
import { categories } from "../utils/helpers";

export const loginSchema = z.object({
  userName: z.string().min(1, "Ingresar nombre de usuario"),
  password: z.string().min(1, "Ingresar contraseña"),
});

export const signUpSchema = z.object({
  userName: z.string().min(1, "Ingresar nombre de usuario"),
  password: z
    .string()
    .min(1, "Ingresar contraseña")
    .regex(
      /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/,
      "La contraseña debe contener al menos un número y una letra mayúscula y minúscula, y al menos 8 o más caracteres"
    ),
  email: z.string().min(1, "Ingresar Email").email("El email es invalido"),
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
