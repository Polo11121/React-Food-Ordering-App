import { useEffect } from "react";
import { Button, Form, Separator, Skeleton } from "@/components/ui";
import {
  ManageRestaurantSchema,
  manageRestaurantSchema,
} from "@/validationSchemas/manageRestaurant";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  CuisinesSection,
  DetailsSection,
  MenuSection,
  ImageSection,
  DetailsSectionSkeleton,
  CuisinesSectionSkeleton,
  MenuSectionSkeleton,
  ImageSectionSkeleton,
} from "@/components/forms/ManageRestaurantForm";
import { Restaurant } from "@/types";
import { UseMutateAsyncFunction } from "@tanstack/react-query";

type ManageRestaurantFormProp = {
  onSubmit: UseMutateAsyncFunction<Restaurant, Error, FormData, unknown>;
  isLoading: boolean;
  restaurant?: Restaurant;
};

export const ManageRestaurantForm = ({
  onSubmit,
  isLoading,
  restaurant,
}: ManageRestaurantFormProp) => {
  const form = useForm<ManageRestaurantSchema>({
    resolver: zodResolver(manageRestaurantSchema),
    defaultValues: {
      city: "",
      country: "",
      deliveryPrice: 0,
      estimatedDeliveryTime: 0,
      name: "",
      cuisines: [],
      menuItems: [
        {
          name: "",
          price: 0,
        },
      ],

      ...restaurant,
    },
  });

  useEffect(() => {
    if (restaurant) {
      const deliveryPriceFormatted = parseInt(
        (restaurant.deliveryPrice / 100).toFixed(2)
      );
      const menuItemsFormatted = restaurant.menuItems.map(
        ({ name, price }) => ({
          name: name,
          price: parseInt((price / 100).toFixed(2)),
        })
      );
      form.reset({
        ...restaurant,
        deliveryPrice: deliveryPriceFormatted,
        menuItems: menuItemsFormatted,
      });
    }
  }, [restaurant, form]);

  const submitHandler = form.handleSubmit(
    async (data: ManageRestaurantSchema) => {
      const formData = new FormData();

      formData.append("name", data.name);
      formData.append("city", data.city);
      formData.append("country", data.country);
      formData.append("deliveryPrice", (data.deliveryPrice * 100).toString());
      formData.append(
        "estimatedDeliveryTime",
        data.estimatedDeliveryTime.toString()
      );
      data.menuItems.forEach((menuItem, index) => {
        formData.append(`menuItems[${index}][name]`, menuItem.name);
        formData.append(
          `menuItems[${index}][price]`,
          (menuItem.price * 100).toString()
        );
      });
      data.cuisines.forEach((cuisine) => {
        formData.append("cuisines[]", cuisine);
      });

      if (data.imageFile) {
        formData.append("imageFile", data.imageFile);
      }

      await onSubmit(formData);
    }
  );

  const isDisabled = !Object.keys(form.formState.dirtyFields).length;

  return (
    <Form {...form}>
      <form
        onSubmit={submitHandler}
        className="space-y-8 bg-gray-50 p-10 rounded-lg"
      >
        <DetailsSection />
        <Separator />
        <CuisinesSection />
        <Separator />
        <MenuSection />
        <Separator />
        <ImageSection />
        <Button disabled={isDisabled} isLoading={isLoading} type="submit">
          Submit
        </Button>
      </form>
    </Form>
  );
};

export const ManageRestaurantFormSkeleton = () => (
  <div className="space-y-8 bg-gray-50 p-10 rounded-lg">
    <DetailsSectionSkeleton />
    <Separator />
    <CuisinesSectionSkeleton />
    <Separator />
    <MenuSectionSkeleton />
    <Separator />
    <ImageSectionSkeleton />
    <Skeleton className="h-9 w-[77px]" />
  </div>
);
