import { useState } from "react";
import { useSearchRestaurants } from "@/api/restaurantApi";
import { RestaurantSearch } from "@/types";
import { SearchRestaurantsSchema } from "@/validationSchemas/searchRestaurants";
import { useParams, useSearchParams } from "react-router-dom";

export const useSearch = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { city } = useParams() as { city: string };
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get("searchQuery") || "";
  const selectedCuisines =
    searchParams.get("selectedCuisines")?.split(",") || [];

  const { data, isLoading: isRestaurantsLoading } = useSearchRestaurants(
    city,
    searchParams
  );

  const setCuisinesHandler = (cuisines: string[]) =>
    setSearchParams((prevState) => {
      const newParams = new URLSearchParams(prevState);

      console.log(cuisines);
      if (cuisines.length) {
        newParams.set("selectedCuisines", cuisines.join(","));
      } else {
        newParams.delete("selectedCuisines");
      }

      newParams.delete("page");
      return newParams;
    });

  const setSearchQueryHandler = (searchFormData: SearchRestaurantsSchema) =>
    setSearchParams((prevState) => {
      const newParams = new URLSearchParams(prevState);
      newParams.set("searchQuery", searchFormData.searchQuery);
      newParams.delete("page");

      return newParams;
    });

  const changePageHandler = (page: number) =>
    setSearchParams((prevState) => {
      const newParams = new URLSearchParams(prevState);
      newParams.set("page", page.toString());

      return newParams;
    });

  const expandHandler = () => setIsExpanded((prevState) => !prevState);

  const resetHandler = () =>
    setSearchParams((prevState) => {
      const newState = new URLSearchParams(prevState);
      newState.delete("searchQuery");

      return newState;
    });

  const isLoading = isRestaurantsLoading || !data || !city;

  return {
    isLoading,
    city,
    searchQuery,
    selectedCuisines,
    data: data as RestaurantSearch,
    setCuisinesHandler,
    setSearchQueryHandler,
    changePageHandler,
    resetHandler,
    isExpanded,
    expandHandler,
  };
};
