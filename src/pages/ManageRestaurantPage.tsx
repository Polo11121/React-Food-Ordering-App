import {
  useCreateMyRestaurant,
  useGetMyRestaurant,
  useUpdateMyRestaurant,
} from "@/api/myRestaurantApi";
import {
  ManageRestaurantForm,
  ManageRestaurantFormSkeleton,
} from "@/components/forms/ManageRestaurantForm";

export const ManageRestaurantPage = () => {
  const {
    data: restaurant,
    isLoading,
    isFetchedAfterMount,
    isRefetching,
  } = useGetMyRestaurant();
  const { mutateAsync, isPending } = (
    restaurant ? useUpdateMyRestaurant : useCreateMyRestaurant
  )();

  if (isLoading || !isFetchedAfterMount) {
    return <ManageRestaurantFormSkeleton />;
  }

  return (
    <ManageRestaurantForm
      restaurant={restaurant}
      isLoading={isPending || isRefetching}
      onSubmit={mutateAsync}
    />
  );
};
