import { Order, OrderStatus } from "@/types";
import {
  Badge,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Label,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Separator,
  Skeleton,
} from "@/components/ui";
import { ORDER_STATUS } from "@/lib/orderStatusConfig";
import { useUpdateMyRestaurantOrderStatus } from "@/api/myRestaurantApi";

type OrderItemCardProps = {
  order: Order;
};

export const OrderItemCard = ({ order }: OrderItemCardProps) => {
  const { mutate, isPending } = useUpdateMyRestaurantOrderStatus();
  const getTime = () => {
    const orderDateTime = new Date(order.createdAt);
    const hours = orderDateTime.getHours();
    const minutes = orderDateTime.getMinutes();

    const paddedMinutes = minutes < 10 ? `0${minutes}` : minutes;

    return `${hours}:${paddedMinutes}`;
  };

  const updateStatusHandler = (status: OrderStatus) =>
    mutate({ orderId: order._id, status });

  return (
    <Card>
      <CardHeader>
        <CardTitle className="grid md:grid-cols-4 gap-4 justify-between mb-3">
          <div>
            Customer Name:{" "}
            <span className="font-normal">{order.deliveryDetails.name}</span>
          </div>
          <div>
            Delivery address:{" "}
            <span className="font-normal">
              {order.deliveryDetails.addressLine1}, {order.deliveryDetails.city}
            </span>
          </div>
          <div>
            Time: <span className="font-normal">{getTime()}</span>
          </div>
          <div>
            Total Cost:{" "}
            <span className="font-normal">
              {(order.totalAmount / 100).toFixed(2)}$
            </span>
          </div>
        </CardTitle>
        <Separator />
      </CardHeader>
      <CardContent className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          {order.cartItems.map((cartItem) => (
            <span>
              <Badge variant="outline" className="mr-2">
                {cartItem.quantity}
              </Badge>
              {cartItem.name}
            </span>
          ))}
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="status">What is the status of this order?</Label>
          <Select
            disabled={isPending}
            onValueChange={updateStatusHandler}
            defaultValue={order.status}
          >
            <SelectTrigger id="status">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent position="popper">
              {ORDER_STATUS.map(({ label, value }) => (
                <SelectItem value={value}>{label}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </CardContent>
    </Card>
  );
};

export const OrderItemCardSkeleton = () => (
  <Skeleton className="rounded-xl h-[215px]" />
);
