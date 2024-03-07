import { Order } from "@/types";
import { OrderItemCard, OrderItemCardSkeleton } from "@/components";
import { Skeleton } from "./ui";

type ManageOrdersProps = {
  orders: Order[];
};

export const ManageOrders = ({ orders }: ManageOrdersProps) => (
  <div className="space-y-5 bg-gray-50 p-10 rounded-lg">
    <h2 className="text-2xl font-bold">{orders?.length} active orders</h2>
    {orders?.map((order) => (
      <OrderItemCard order={order} key={order._id} />
    ))}
  </div>
);

export const ManageOrdersSkeleton = () => (
  <div className="space-y-5 bg-gray-50 p-10 rounded-lg">
    <Skeleton className="h-8 w-36" />
    <OrderItemCardSkeleton />
    <OrderItemCardSkeleton />
  </div>
);
