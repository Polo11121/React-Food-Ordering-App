import { useCreateMyRestaurant } from "@/api/MyRestaurantApi";
import {
  ManageRestaurantForm,
  ManageRestaurantFormSkeleton,
} from "@/components/forms/ManageRestaurantForm";

export const ManageRestaurantPage = () => {
  const { mutate, isPending } = useCreateMyRestaurant();

  if (false) {
    return <ManageRestaurantFormSkeleton />;
  }

  return <ManageRestaurantForm isLoading={isPending} onSubmit={mutate} />;
};
