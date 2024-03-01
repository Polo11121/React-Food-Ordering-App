import { env } from "@/lib/env";
import { RestaurantSearch } from "@/types";
import { useQuery } from "@tanstack/react-query";

const API_BASE_URL = env.VITE_API_BASE_URL;

export const useSearchRestaurants = (
  city: string,
  searchParams: URLSearchParams
) => {
  const searchRestaurants = async (): Promise<RestaurantSearch> => {
    const response = await fetch(
      `${API_BASE_URL}/api/restaurant/search/${city}?${searchParams.toString()}`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch restaurants");
    }

    return response.json();
  };

  return useQuery({
    queryKey: ["restaurants", city, searchParams.toString()],
    queryFn: searchRestaurants,
    enabled: Boolean(city),
  });
};
