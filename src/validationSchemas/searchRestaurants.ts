import * as z from "zod";

export const searchRestaurantsSchema = z.object({
  searchQuery: z.string().min(1, "Restaurant name is required"),
});

export type SearchRestaurantsSchema = z.infer<typeof searchRestaurantsSchema>;
