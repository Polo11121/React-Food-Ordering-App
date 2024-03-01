import { useParams } from "react-router";
import { useSearchRestaurants } from "@/api/restaurantApi";
import {
  LoadingScreen,
  PaginationSelector,
  SearchBar,
  SearchResultCard,
  SearchResultsInfo,
} from "@/components";
import { SearchRestaurantsSchema } from "@/validationSchemas/searchRestaurants";
import { useSearchParams } from "react-router-dom";

export type SearchState = {
  searchQuery: string;
};

export const SearchPage = () => {
  const { city } = useParams() as { city: string };
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get("searchQuery") || "";

  const { data, isLoading: isRestaurantsLoading } = useSearchRestaurants(
    city,
    searchParams
  );

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

  const resetHandler = () =>
    setSearchParams((prevState) => {
      const newState = new URLSearchParams(prevState);
      newState.delete("searchQuery");

      return newState;
    });

  const isLoading = isRestaurantsLoading || !data || !city;

  return (
    <div className="flex flex-col flex-1 lg:flex-row">
      <div id="cuisines-list" className="w-[250px]">
        insert cuisines list here
      </div>
      <div id="main-content" className="flex flex-col gap-5 flex-1">
        <SearchBar
          defaultValue={searchQuery}
          onReset={resetHandler}
          onSubmit={setSearchQueryHandler}
          placeholder="Search by Cuisine or Restaurant Name"
        />
        {isLoading ? (
          <LoadingScreen />
        ) : (
          <>
            <SearchResultsInfo city={city} total={data.pagination.total} />
            {data.data.map((restaurant) => (
              <SearchResultCard restaurant={restaurant} />
            ))}
            {data.pagination.totalPages > 1 && (
              <PaginationSelector
                onPageChange={changePageHandler}
                page={data.pagination.page}
                pages={data.pagination.totalPages}
              />
            )}
          </>
        )}
      </div>
    </div>
  );
};
