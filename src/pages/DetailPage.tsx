import { useGetRestaurantById } from "@/api/restaurantApi";
import {
  DetailPageLoadingScreen,
  MenuItem,
  RestaurantInfo,
} from "@/components";
import { AspectRatio, OrderSummary } from "@/components/ui";
import { useParams } from "react-router-dom";
import { useCart } from "@/hooks/useCart";

export const DetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const { data: restaurant, isLoading } = useGetRestaurantById(id);
  const { addToCartHandler, cartItems, removeFromCartHandler } = useCart(id);

  if (isLoading || !restaurant) {
    return <DetailPageLoadingScreen />;
  }

  return (
    <div className="flex flex-col gap-10">
      <AspectRatio ratio={16 / 9}>
        <img
          className="rounded-md object-cover h-full w-full"
          src={restaurant.imageUrl}
        />
      </AspectRatio>
      <div className="grid md:grid-cols-[4fr_2fr] gap-5 md:px-32">
        <div className="flex flex-col gap-4">
          <RestaurantInfo restaurant={restaurant} />
          <h1 className="text-2xl font-bold tracking-tight">Menu</h1>
          {restaurant.menuItems.map((item) => (
            <MenuItem onAddItem={addToCartHandler} key={item._id} item={item} />
          ))}
        </div>
        <div>
          <OrderSummary
            onRemoveItem={removeFromCartHandler}
            restaurant={restaurant}
            cartItems={cartItems}
          />
        </div>
      </div>
    </div>
  );
};
