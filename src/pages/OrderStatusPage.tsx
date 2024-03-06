import { useGetMyOrders } from "@/api/orderApi";
import { LoadingScreen, OrderItem } from "@/components";
import { Link } from "react-router-dom";

export const OrderStatusPage = () => {
  const { data: orders, isLoading } = useGetMyOrders();

  if (isLoading || !orders) {
    return <LoadingScreen />;
  }

  if (!orders.length) {
    return (
      <div>
        <h1 className="font-bold text-3xl">No orders found.</h1>
        <p className="font-semibold text-lg">
          You can search for restaurants and place an order{" "}
          <Link className="text-orange-500 underline" to="/">
            here
          </Link>
          .
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-10">
      {orders.map((order) => (
        <OrderItem order={order} />
      ))}
    </div>
  );
};
