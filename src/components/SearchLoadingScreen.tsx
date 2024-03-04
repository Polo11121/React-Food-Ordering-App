import {
  SearchResultCardSkeleton,
  SearchResultsInfoSkeleton,
  SortOptionDropdownSkeleton,
} from "@/components";

export const SearchLoadingScreen = () => (
  <div className="flex flex-col gap-5 flex-1">
    <div className="flex items-center justify-between">
      <SearchResultsInfoSkeleton />
      <SortOptionDropdownSkeleton />
    </div>
    <SearchResultCardSkeleton />
    <SearchResultCardSkeleton />
    <SearchResultCardSkeleton />
  </div>
);
