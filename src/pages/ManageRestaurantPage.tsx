import {
  useCreateMyRestaurant,
  useGetMyRestaurant,
  useGetMyRestaurantsOrders,
  useUpdateMyRestaurant,
} from "@/api/myRestaurantApi";
import {
  ManageRestaurantForm,
  ManageRestaurantFormSkeleton,
} from "@/components/forms/ManageRestaurantForm";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui";
import { ManageOrders, ManageOrdersSkeleton } from "@/components";

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
  const { data: orders, isLoading: isOrdersLoading } =
    useGetMyRestaurantsOrders();

  const isManageOrdersLoading = isOrdersLoading || !orders;
  const isManageRestaurantLoading = isLoading || !isFetchedAfterMount;

  return (
    <Tabs defaultValue="manage-restaurant">
      <TabsList defaultValue="manage-restaurant">
        <TabsTrigger value="manage-restaurant">Manage Restaurant</TabsTrigger>
        <TabsTrigger value="orders">Orders</TabsTrigger>
      </TabsList>
      <TabsContent value="orders">
        {isManageOrdersLoading ? (
          <ManageOrdersSkeleton />
        ) : (
          <ManageOrders orders={orders} />
        )}
      </TabsContent>
      <TabsContent value="manage-restaurant">
        {isManageRestaurantLoading ? (
          <ManageRestaurantFormSkeleton />
        ) : (
          <ManageRestaurantForm
            restaurant={restaurant}
            isLoading={isPending || isRefetching}
            onSubmit={mutateAsync}
          />
        )}
      </TabsContent>
    </Tabs>
  );
};
