import { CartItem, Restaurant } from "@/types";
import {
  Badge,
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  Separator,
  Skeleton,
} from "@/components/ui";
import { Trash } from "lucide-react";
import { CheckoutButton } from "@/components";

type OrderSummaryProps = {
  restaurant: Restaurant;
  cartItems: CartItem[];
  onRemoveItem: (id: string) => void;
};

export const OrderSummary = ({
  cartItems,
  restaurant,
  onRemoveItem,
}: OrderSummaryProps) => {
  const totalCost = (
    cartItems.reduce(
      (acc, { price, quantity }) => acc + price * quantity,
      restaurant.deliveryPrice
    ) / 100
  ).toFixed(2);

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl font-bold tracking-tight flex justify-between">
          <span>Your order</span>
          <span>{totalCost}$</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-3.5">
        {cartItems.map(({ _id, name, price, quantity }) => {
          const removeItemHandler = () => onRemoveItem(_id);

          return (
            <div key={_id} className="flex justify-between">
              <span>
                <Badge variant="outline" className="mr-2">
                  {quantity}
                </Badge>
                {name}
              </span>
              <span className="flex items-center gap-1">
                {((price * quantity) / 100).toFixed(2)}$
                <Trash
                  size={20}
                  className="text-red-500  hover:scale-105 hover:text-red-600 cursor-pointer"
                  onClick={removeItemHandler}
                />
              </span>
            </div>
          );
        })}
        <Separator />
        <div className="flex justify-between">
          <span>Delivery</span>
          <span>{(restaurant.deliveryPrice / 100).toFixed(2)}$</span>
        </div>
        <Separator />
      </CardContent>
      <CardFooter>
        <CheckoutButton isDisabled={!cartItems.length} />
      </CardFooter>
    </Card>
  );
};

export const OrderSummarySkeleton = () => (
  <Skeleton className="h-[220px] rounded-xl" />
);
