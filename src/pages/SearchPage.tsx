import {
  CuisinesFilter,
  LoadingScreen,
  PaginationSelector,
  SearchBar,
  SearchResultCard,
  SearchResultsInfo,
} from "@/components";
import { useSearch } from "@/hooks/useSearch";

export type SearchState = {
  searchQuery: string;
};

export const SearchPage = () => {
  const {
    isLoading,
    city,
    searchQuery,
    selectedCuisines,
    data,
    setCuisinesHandler,
    setSearchQueryHandler,
    changePageHandler,
    resetHandler,
    expandHandler,
    isExpanded,
  } = useSearch();

  return (
    <div className="flex flex-col flex-1 lg:flex-row gap-4">
      <div id="cuisines-list" className="w-[250px]">
        <CuisinesFilter
          selectedCuisines={selectedCuisines}
          isExpanded={isExpanded}
          onExpand={expandHandler}
          onChange={setCuisinesHandler}
        />
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
