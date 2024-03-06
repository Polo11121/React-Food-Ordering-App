import { Order } from "@/types";
import { Progress } from "@/components/ui";
import { ORDER_STATUS } from "@/lib/orderStatusConfig";

type OrderStatusHeaderProps = {
  order: Order;
};

export const OrderStatusHeader = ({ order }: OrderStatusHeaderProps) => {
  const getExpectedDeliveryTime = () => {
    const created = new Date(order.createdAt);

    created.setMinutes(
      created.getMinutes() + order.restaurant.estimatedDeliveryTime
    );

    const hours = created.getHours();
    const minutes = created.getMinutes();

    const paddedMinutes = minutes < 10 ? `0${minutes}` : minutes;

    return `${hours}:${paddedMinutes}`;
  };

  const status = ORDER_STATUS.find((status) => status.value === order.status);

  return (
    <>
      <h1 className="text-4xl font-bold tracking-tighter flex flex-col gap-5 md:flex-row md:justify-between">
        <span>Order Status: {status?.label}</span>
        <span>Expected by: {getExpectedDeliveryTime()}</span>
      </h1>
      <Progress className="animate-pulse" value={status?.progressValue} />
    </>
  );
};
