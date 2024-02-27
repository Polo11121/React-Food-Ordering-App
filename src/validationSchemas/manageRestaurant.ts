import * as z from "zod";

export const manageRestaurantSchema = z
  .object({
    name: z.string().min(1, "is required"),
    city: z.string().min(1, "is required"),
    country: z.string().min(1, "is required"),
    deliveryPrice: z.coerce
      .number({
        invalid_type_error: "must be a valid number",
      })
      .min(1, "is required"),
    estimatedDeliveryTime: z.coerce
      .number({
        invalid_type_error: "must be a valid number",
      })
      .min(1, "is required"),
    cuisines: z.array(z.string()).nonempty({
      message: "Please select at least one item",
    }),
    menuItems: z
      .array(
        z.object({
          name: z.string().min(1, "is required"),
          price: z.coerce.number().min(1, "is required"),
        })
      )
      .min(1),
    imageUrl: z.string().optional(),
    imageFile: z.instanceof(File, { message: "Image is required" }).optional(),
  })
  .refine((data) => data.imageUrl || data.imageFile, {
    message: "Either image URL or image File must be provided",
    path: ["imageFile"],
  });

export type ManageRestaurantSchema = z.infer<typeof manageRestaurantSchema>;
