import * as z from "zod";

export const updateUserSchema = z.object({
  email: z.string().optional(),
  name: z.string().min(1, "Name is required").default(""),
  addressLine1: z.string().min(1, "Address Line 1 is required").default(""),
  city: z.string().min(1, "City is required").default(""),
  country: z.string().min(1, "Country is required").default(""),
});

export type UpdateUserSchema = z.infer<typeof updateUserSchema>;
