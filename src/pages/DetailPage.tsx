import { useGetRestaurantById } from "@/api/restaurantApi";
import { useParams } from "react-router-dom";

export const DetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const data = useGetRestaurantById(id);
  return <div></div>;
};
