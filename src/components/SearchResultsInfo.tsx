import { Link } from "react-router-dom";
import { Skeleton } from "@/components/ui";

type SearchResultsInfoProps = {
  total: number;
  city: string;
};

export const SearchResultsInfo = ({ total, city }: SearchResultsInfoProps) => (
  <div className="text-xl font-bold flex flex-col gap-3 justify-between lg:items-center lg:flex-row">
    <span>
      {total} Restaurants found in {city}
      <Link
        to="/"
        className="ml-1 text-sm font-semibold underline cursor-pointer text-blue-500"
      >
        Change Location
      </Link>
    </span>
  </div>
);

export const SearchResultsInfoSkeleton = () => (
  <div className="flex items-end">
    <Skeleton className="h-[28px] w-[270px]" />
    <Skeleton className="h-4 w-28" />
  </div>
);
