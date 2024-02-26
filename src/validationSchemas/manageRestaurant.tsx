import * as z from "zod";

export const manageRestaurantSchema = z
  .object({
    name: z.string({
      required_error: "Restuarant name is required",
    }),
    city: z.string({
      required_error: "City is required",
    }),
    country: z.string({
      required_error: "Country is required",
    }),
    deliveryPrice: z.coerce.number({
      required_error: "Delivery price is required",
      invalid_type_error: "Must be a valid number",
    }),
    estimatedDeliveryTime: z.coerce.number({
      required_error: "Estimated delivery time is required",
      invalid_type_error: "Must be a valid number",
    }),
    cuisines: z.array(z.string()).nonempty({
      message: "Please select at least one item",
    }),
    menuItems: z
      .array(
        z.object({
          name: z.string().min(1, "Name is required"),
          price: z.coerce.number().min(1, "Price is required"),
        })
      )
      .nonempty({
        message: "Please add at least one menu item",
      }),
    imageUrl: z.string().optional(),
    imageFile: z.instanceof(File, { message: "Image is required" }).optional(),
  })
  .refine((data) => data.imageUrl || data.imageFile, {
    message: "Either image URL or image File must be provided",
    path: ["imageFile"],
  });

export type ManageRestaurantSchema = z.infer<typeof manageRestaurantSchema>;
