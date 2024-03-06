import { Order } from "@/types";
import { OrderStatusDetail, OrderStatusHeader } from "@/components";
import { AspectRatio } from "@/components/ui";

type OrderItemProps = {
  order: Order;
};

export const OrderItem = ({ order }: OrderItemProps) => (
  <div className="space-y-10 bg-gray-50 p-10 rounded-lg">
    <OrderStatusHeader order={order} />
    <div className="grid gap-10 md:grid-cols-2">
      <OrderStatusDetail order={order} />
      <AspectRatio ratio={16 / 5}>
        <img
          src={order.restaurant.imageUrl}
          alt={`${order.restaurant.imageUrl}`}
          className="rounded-md object-cover h-full w-full"
        />
      </AspectRatio>
    </div>
  </div>
);
